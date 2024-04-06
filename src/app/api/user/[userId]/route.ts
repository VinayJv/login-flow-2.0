import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function PUT(request: Request, context: any){
    const { params } = context;
    try{
        const updatedUser = await prisma.user.update({
          where: {
            id: Number(params.userId)
          },
          data:{
            verified: true
          } 
        });
        return NextResponse.json({ updatedUser, status: 200 });
    } catch(error){
        return NextResponse.json({ status: 500 });
    }
}