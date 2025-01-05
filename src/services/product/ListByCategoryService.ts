import prismaClient from "../../prisma";
interface ProductRequest {
  category_id: string;
}
const ListByCategoryService = {
  execute: async ({ category_id }: ProductRequest) => {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
      orderBy: {
        name: "asc",
      },
    });
    return findByCategory;
  },
};

export { ListByCategoryService };
