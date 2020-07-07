import React from "react";
import { Input, Button } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
    return (
        <form onSubmit ={submitFormHandler} id="login-form">
            <Input>
            <input name="email" type="email" id="email" placeholder="Email"></input>
            </Input>

            <Input>
            <input name="password" type="password" id="password" placeholder="Password"></input>
            </Input>

            <Button color="green" id="submit">Submit</Button>
        </form>
    );
};

export default LoginForm;