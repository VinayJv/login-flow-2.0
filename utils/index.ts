import { PrismaClient } from "@prisma/client";
import { Categories, FindUserProps } from "./types";

const prisma = new PrismaClient();

export async function getAllUsers(){
    return await prisma.user.findMany({});
}

export async function findUser({ email }: FindUserProps){
    return await prisma.user.findUnique({
        where: {
            email: email
        } 
    });
}

export const paginate = (items: Categories[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};