import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}
const CreateCategoryService = {
  execute: async ({ name }: CategoryRequest) => {
    if (!name || name.trim().length === 0) throw new Error("name invalid");

    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (categoryAlreadyExists) throw new Error("category already exists");
    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });
    return category;
  },
};

export { CreateCategoryService };
