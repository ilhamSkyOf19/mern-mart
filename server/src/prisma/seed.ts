import { prisma } from "../application/db";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "Baguette Bread - Freshly Baked by Origin Bakery",
        category: "bread",
        price: 99,
        favorite: true,
        img: "baguette-bread.png",
        netWeight: 100,
        stock: 3,
      },
      {
        title: "Bagel Bread - Freshly Baked by Origin Bakery",
        category: "bread",
        price: 99,
        favorite: false,
        img: "bagel-bread.png",
        netWeight: 100,
        stock: 3,
      },
    ],
  });

  console.log("✅ Data seeded");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("❌ Error seeding data", e);
    process.exit(1);
  });
