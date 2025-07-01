/* eslint-disable */

// public/script.js
const form = document.getElementById('clienteForm');
const lista = document.getElementById('clientesList');

const formMoto = document.getElementById('motoForm');
const listaMotos = document.getElementById('motosList');
const formServicio = document.getElementById('servicioForm');
const listaServicios = document.getElementById('serviciosList');

let clienteEditandoId = null;

async function obtenerClientes() {
  const res = await fetch('/clientes');
  const clientes = await res.json();
  lista.innerHTML = '';
  clientes.forEach((c) => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${c.nombre} (${c.email}) - ${c.telefono}
      <button onclick="editarCliente(${c.id}, '${c.nombre}', '${c.email}', '${c.telefono}')">Editar</button>
      <button onclick="eliminarCliente(${c.id})">Eliminar</button>
    `;
    lista.appendChild(item);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cliente = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
  };

  if (clienteEditandoId) {
    await fetch(`/clientes/${clienteEditandoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    });
    clienteEditandoId = null;
  } else {
    await fetch('/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    });
  }

  form.reset();
  obtenerClientes();
});

window.editarCliente = function (id, nombre, email, telefono) {
  document.getElementById('nombre').value = nombre;
  document.getElementById('email').value = email;
  document.getElementById('telefono').value = telefono;
  clienteEditandoId = id;
};

window.eliminarCliente = async function (id) {
  await fetch(`/clientes/${id}`, { method: 'DELETE' });
  obtenerClientes();
};

// Inicial
obtenerClientes();

// Motos
async function obtenerMotos() {
  const res = await fetch('/motos');
  const motos = await res.json();
  listaMotos.innerHTML = '';
  motos.forEach((m) => {
    const item = document.createElement('li');
    item.textContent = `${m.marca} - ${m.modelo} (${m.placa})`;
    listaMotos.appendChild(item);
  });
}

formMoto.addEventListener('submit', async (e) => {
  e.preventDefault();
  const moto = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    placa: document.getElementById('placa').value,
    clienteId: parseInt(document.getElementById('clienteId').value),
  };

  await fetch('/motos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(moto),
  });

  formMoto.reset();
  obtenerMotos();
});

// Servicios
async function obtenerServicios() {
  const res = await fetch('/servicios');
  const servicios = await res.json();
  listaServicios.innerHTML = '';
  servicios.forEach((s) => {
    const item = document.createElement('li');
    item.textContent = `${s.descripcion} - Moto ID: ${s.motoId} - Fecha: ${new Date(s.fecha).toLocaleDateString()}`;
    listaServicios.appendChild(item);
  });
}

formServicio.addEventListener('submit', async (e) => {
  e.preventDefault();
  const servicio = {
    descripcion: document.getElementById('descripcion').value,
    motoId: parseInt(document.getElementById('motoId').value),
  };

  await fetch('/servicios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(servicio),
  });

  formServicio.reset();
  obtenerServicios();
});

obtenerClientes();
obtenerMotos();
obtenerServicios();
