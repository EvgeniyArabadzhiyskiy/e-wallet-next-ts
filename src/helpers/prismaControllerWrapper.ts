import prisma from "../lib/prismaClient";

export type QueryFunction<T> = () => Promise<T>;

export const prismaControllerWrapper = async <T>(controller: QueryFunction<T>): Promise<T> => {
  try {
    return await controller();
  } catch (error) {
    console.log("Prisma query error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
