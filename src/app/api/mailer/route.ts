/* eslint-disable */

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { env } from "../../../env";

const tranporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    auth:{
        user: env.GMAIL_FROM,
        pass: env.GMAIL_APP_PASSWORD
    }
})

export async function POST(request: Request){
    const message = await request.json();
    try{
        await new Promise((resolve, reject)=> {
            tranporter.sendMail(message, (err, info)=>{
                if(err){
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });
        return NextResponse.json({ status: 200 });
    } catch(error){
        return NextResponse.json({ status: 500 });
    }
}

// export async function POST(request: Request){
//     const message = await request.json();
//     try{
//         tranporter.sendMail(message, (err, info)=>{
//             console.log(info.envelope);
//             console.log(info.messageId)
//         });
//         return NextResponse.json({ status: 200 });
//     } catch(error){
//         return NextResponse.json({ status: 500 });
//     }
// }