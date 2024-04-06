/* eslint-disable */
'use client';

import { CustomButton } from "components/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserContext } from "context/UserContext";

export default function SignUp() {
    const router = useRouter();
    const { setUser, setUserStatus } = useUserContext() ?? {};

    const handleForm = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        const newUser = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        sessionStorage.setItem("password", Math.random().toString().substring(2, 8));
        const message = {
                from:"datonater0001@gmail.com",
                to: newUser.email,
                subject: "ECOMMERCE LOGIN ",
                text: `Your One-Time-Password :${sessionStorage.getItem("password")}`
        }
        try{
            const { createdUser } = await fetch("/api", {
                method: 'POST', 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            }).then((data) => data.json());
            
            if(createdUser){
                const { status } = await fetch("/api/mailer",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(message)
                }).then((data)=> data);
    
                if(status === 200){
                    if(setUser !== undefined && setUserStatus !== undefined){
                        setUser(createdUser);
                        setUserStatus(true);
                    }
                    router.push("/verify");
                } else {
                    alert("Error sending mail! Try again after sometime")
                }
            }
        } catch(error){
            alert("Email Already Registered");
        }  
    }

    return (
        <form onSubmit={handleForm}>
            <div className="loginFormTitleContainer">
                <h1>Create your account</h1>
            </div>
            <label htmlFor="name">
                Name<input type="text" placeholder="Enter" id="name" required></input>
            </label>
            <label htmlFor="email">
                Email<input type="email" placeholder="Enter" id="email" required></input>
            </label>
            <label htmlFor="password">
                Password<input type="password" placeholder="Enter" id="password" required></input>
            </label>
            <CustomButton title="Sign Up" btnType="submit" />
            <div className="divider"></div>
            <p>Have an Account? <span><Link href={"/"}>LOGIN</Link></span></p>
        </form>)
}