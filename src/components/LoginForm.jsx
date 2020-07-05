import React from "react";
import { Input } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
    return (
        <form onSubmit ={submitFormHandler} id="login-form">
            <Input>
            <label>Email</label>
            <input name="email" type="email" id="email"></input>
            </Input>

            <Input>
            <label>Password</label>
            <input name="password" type="password" id="password"></input>
            </Input>

            <button id="submit">Submit</button>
        </form>
    );
};

export default LoginForm;