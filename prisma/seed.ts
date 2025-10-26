import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CPUs...');

  await prisma.cpu.createMany({
    data: [
      { vendor: 'Intel', model: 'Core i9-10900K', year: 2020, cores: 10, threads: 20 },
      { vendor: 'Intel', model: 'Core i7-8700K', year: 2017, cores: 6, threads: 12 },
      { vendor: 'AMD', model: 'Ryzen 9 5900X', year: 2020, cores: 12, threads: 24 },
      { vendor: 'AMD', model: 'Ryzen 5 3600', year: 2019, cores: 6, threads: 12 }
    ],
  });

  console.log('✅ Seed complete');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });