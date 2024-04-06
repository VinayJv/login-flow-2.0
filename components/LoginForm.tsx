/* eslint-disable */
'use client';

import { useUserContext } from "context/UserContext";
import { CustomButton } from "./CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginForm(){
    const { setUser } = useUserContext() ?? {};
    const router = useRouter();

    const handleForm = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        try{
            const { foundUser, status } = await fetch(`/api/user`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: event.target.elements[0].value,
                    password: event.target.elements[1].value
                })
            }).then((data)=>data.json());
            
            if(status === 200 && foundUser.verified){
                if(setUser !== undefined){
                    setUser(foundUser);
                }
                router.push("/dashboard");
            } else{
                alert("Check Your Email Password");
            }
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