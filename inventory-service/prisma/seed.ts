import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Seed data for development and testing
 */
async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.productStats.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        title: 'Calculus Textbook - 11th Edition',
        description:
          'Advanced Calculus textbook in excellent condition. Used for one semester. Includes solutions manual.',
        price: 85.0,
        category: 'TEXTBOOKS',
        condition: 'LIKE_NEW',
        status: 'ACTIVE',
        sellerId: 'user-1',
        sellerName: 'Sarah Johnson',
        location: 'Boston University',
        images: ['/placeholders/textbook.jpg'],
        tags: ['calculus', 'math', 'textbook', 'STEM'],
        isFeatured: true,
      },
    }),
    prisma.product.create({
      data: {
        title: 'MacBook Pro 14" M2 2023',
        description:
          'Barely used MacBook Pro with M2 chip, 16GB RAM, 512GB SSD. Perfect for students.',
        price: 1499.0,
        category: 'ELECTRONICS',
        condition: 'LIKE_NEW',
        status: 'ACTIVE',
        sellerId: 'user-2',
        sellerName: 'Mike Chen',
        location: 'MIT',
        images: ['/placeholders/macbook.jpg'],
        tags: ['laptop', 'apple', 'macbook', 'computer'],
        isFeatured: true,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Dorm Room Twin XL Bedding Set',
        description: 'Complete bedding set for twin XL dorm beds. Includes sheets, comforter, pillows.',
        price: 45.0,
        category: 'DORM_SUPPLIES',
        condition: 'GOOD',
        status: 'ACTIVE',
        sellerId: 'user-3',
        sellerName: 'Emma Wilson',
        location: 'Harvard',
        images: ['/placeholders/bedding.jpg'],
        tags: ['bedding', 'dorm', 'twin-xl'],
        isFeatured: false,
      },
    }),
    prisma.product.create({
      data: {
        title: 'IKEA Study Desk',
        description: 'Sturdy desk perfect for studying. Easy to assemble and disassemble.',
        price: 60.0,
        category: 'FURNITURE',
        condition: 'GOOD',
        status: 'ACTIVE',
        sellerId: 'user-4',
        sellerName: 'Alex Thompson',
        location: 'Northeastern',
        images: ['/placeholders/desk.jpg'],
        tags: ['desk', 'furniture', 'study'],
        isFeatured: false,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Mini Fridge - 3.2 Cu Ft',
        description: 'Compact refrigerator ideal for dorm rooms. Energy efficient.',
        price: 80.0,
        category: 'DORM_SUPPLIES',
        condition: 'GOOD',
        status: 'ACTIVE',
        sellerId: 'user-5',
        sellerName: 'Lisa Park',
        location: 'BU',
        images: ['/placeholders/fridge.jpg'],
        tags: ['fridge', 'dorm', 'appliance'],
        isFeatured: true,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Nike Running Shoes - Size 10',
        description: 'Gently used Nike running shoes. Great for campus fitness.',
        price: 55.0,
        category: 'SPORTS',
        condition: 'GOOD',
        status: 'ACTIVE',
        sellerId: 'user-6',
        sellerName: 'Tom Baker',
        location: 'MIT',
        images: ['/placeholders/shoes.jpg'],
        tags: ['shoes', 'nike', 'running', 'sports'],
        isFeatured: false,
      },
    }),
  ]);

  console.log(`✅ Created ${products.length} products`);

  // Create product stats
  for (const product of products) {
    await prisma.productStats.create({
      data: {
        productId: product.id,
        views: Math.floor(Math.random() * 500),
        favorites: Math.floor(Math.random() * 50),
        inquiries: Math.floor(Math.random() * 20),
      },
    });
  }

  console.log('✅ Created product statistics');

  console.log('🌱 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
