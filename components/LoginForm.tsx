/* eslint-disable */
'use client';

import { CustomButton } from "./CustomButton";

export function LoginForm(){

    const handleForm = (event: any) => {
        console.log(event.target[0].value, event.target[1].value);
        event.preventDefault();
    }

    return(
    <form onSubmit={handleForm}>
        <div className="loginFormTitleContainer">
            <h1>Login</h1>
            <p>Welcome back to ECOMMERCE</p>
            <p>The next gen business sign up</p>
        </div>
        <label htmlFor="email">
            Email<input type="text" placeholder="Enter" id="email" required></input>
        </label>
        <label htmlFor="password">
            Password<input type="password" placeholder="Enter" id="password" required></input>
        </label>
        <CustomButton title="Login" btnType="submit"/>
        <div className="divider"></div>
        <p>Don't have an Account? <span>SIGN UP</span></p>
    </form>
    );
}