
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cliente = await prisma.cliente.create({
    data: {
      nombre: 'Juan Perez',
      email: 'juan@example.com',
      telefono: '1234567890',
      motos: {
        create: [
          {
            marca: 'Kawasaki',
            modelo: 'Ninja H2R',
            placa: 'ABC123',
            servicios: {
              create: [{ descripcion: 'Revisión inicial' }],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
