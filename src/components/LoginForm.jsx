import React from "react";
import { Input } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
    return (
        <form onSubmit ={submitFormHandler} id="login-form">
            <Input>
            <input name="email" type="email" id="email" placeholder="Email"></input>
            </Input>

            <Input>
            <input name="password" type="password" id="password" placeholder="Password"></input>
            </Input>

            <button class="ui button" id="submit">Submit</button>
        </form>
    );
};

export default LoginForm;