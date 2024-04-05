/* eslint-disable */
'use client';

import { CustomButton } from "components/CustomButton";
import Link from "next/link";

export default function SignUp() {

    const handleForm = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        const newUser = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        const { createdUser } = await fetch("/api", {
            method: 'POST', headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(newUser)
        }).then((data) => data.json());
        console.log(createdUser);
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
                Email<input type="text" placeholder="Enter" id="email" required></input>
            </label>
            <label htmlFor="password">
                Password<input type="password" placeholder="Enter" id="password" required></input>
            </label>
            <CustomButton title="Sign Up" btnType="submit" />
            <div className="divider"></div>
            <p>Have an Account? <span><Link href={"/"}>LOGIN</Link></span></p>
        </form>)
}