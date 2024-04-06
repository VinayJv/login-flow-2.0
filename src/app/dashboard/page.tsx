/* eslint-disable */
'use client';

import { useUserContext } from "context/UserContext";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Dashboard(){
    const router = useRouter();

    const { userStatus } = useUserContext() ?? {}; 

    useLayoutEffect(()=>{
        if(!userStatus){
            router.push("/");
        }
    },[]);

    return(<div>
        <h1>This is dashboard</h1>
    </div>);
}