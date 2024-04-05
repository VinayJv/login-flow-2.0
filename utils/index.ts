import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUsers(){
    return await prisma.user.findMany({});
}