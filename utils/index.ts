import { PrismaClient } from "@prisma/client";
import { FindUserProps } from "./types";

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