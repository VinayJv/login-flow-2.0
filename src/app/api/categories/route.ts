import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    const allCategories = await prisma.category.findMany({});
    return NextResponse.json({ allCategories });
}