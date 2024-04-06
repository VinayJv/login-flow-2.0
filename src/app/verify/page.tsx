/* eslint-disable */
'use client';

import { CustomButton } from "components/CustomButton";
import { useUserContext } from "context/UserContext";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Verify(){
    const router = useRouter();

    const { user, userStatus, setUser } = useUserContext() ?? {};

    const handleVerification = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        let userInput = "";
        for(let i = 0; i<e.target.elements.length; i++){
            userInput+= e.target.elements[i].value
        }
        if(sessionStorage.getItem("password") === userInput){
            const { updatedUser } = await fetch(`/api/user/${user?.id}`).then((data)=>data.json())
            if(updatedUser.verified && updatedUser.status === 200){
                if(setUser !== undefined){
                    setUser(updatedUser);
                }
                router.push("/dashboard");
            }
        } else {
            alert("Check Your Password");
        }
    };

    useLayoutEffect(()=>{
            if(!userStatus){
                router.push("/");
            }
    },[]);

    return(
    <form style={{marginTop: "5rem", textAlign: "center"}} onSubmit={handleVerification}>
        <h1>Verify your email</h1>
        <p>{`Enter the 6 digit code you have received on ${user?.email}`}</p>
        <p style={{textAlign: "left", fontWeight: "600"}}>Code</p>
        <div className="otpInputContainer">
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
            <label>
                <input maxLength={1} type="text" required></input>
            </label>
        </div>
        <CustomButton btnType="submit" title="Verify"/>
    </form>)
}