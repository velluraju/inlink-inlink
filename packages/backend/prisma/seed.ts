import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
  const admin = await prisma.user.upsert({
    where: { email: 'admin@inlink.test' },
    update: {},
    create: {
      email: 'admin@inlink.test',
      password: 'password',
      name: 'Admin',
      accountType: 'admin',
      verified: true,
      walletBalance: 0n
    }
  });

  const brand = await prisma.user.create({
    data: {
      email: 'brand@inlink.test',
      password: 'password',
      name: 'Sample Brand',
      accountType: 'brand',
      verified: true,
      walletBalance: 100000n
    }
  });

  const influencer = await prisma.user.create({
    data: {
      email: 'influencer@inlink.test',
      password: 'password',
      name: 'Sample Influencer',
      accountType: 'influencer',
      verified: true,
      walletBalance: 0n
    }
  });

  const campaign = await prisma.campaign.create({
    data: {
      brandId: brand.id,
      title: 'Sample Campaign',
      description: 'Test campaign',
      budgetMin: 10000,
      budgetMax: 50000,
      platforms: 'instagram,youtube',
      status: 'open'
    }
  });

  await prisma.walletTransaction.create({
    data: {
      userId: brand.id,
      type: 'deposit',
      amountCents: 100000,
      balanceAfter: 100000n,
      referenceId: 'seed-deposit-1'
    }
  });

  console.log('Seed data created');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
