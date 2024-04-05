/* eslint-disable */
'use client';

import { CustomButton } from "./CustomButton";
import Link from "next/link";

export function LoginForm(){

    const handleForm = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        try{
            const { allUsers } = await fetch("/api").then((data)=>data.json());   
        } catch(error){
            console.error(error);
        }
    }

    return(
    <form onSubmit={handleForm}>
        <div className="loginFormTitleContainer">
            <h1>Login</h1>
            <p>Welcome back to ECOMMERCE</p>
            <p>The next gen business marketplace</p>
        </div>
        <label htmlFor="email">
            Email<input type="email" placeholder="Enter" id="email" required></input>
        </label>
        <label htmlFor="password">
            Password<input type="password" placeholder="Enter" id="password" required></input>
        </label>
        <CustomButton title="Login" btnType="submit"/>
        <div className="divider"></div>
        <p>Don't have an Account? <span><Link href={"/signup"}>SIGN UP</Link></span></p>
    </form>
    );
}