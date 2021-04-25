import React, { useState } from 'react'
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import { auth, provider } from '../firebase';
function Login() {
    const [loading, setLoading] = useState(false);
    
    const signIn = e =>{
        e.preventDefault();
        setLoading(true);
        auth.signInWithPopup(provider).catch((error) =>
            alert(error.message));
        setLoading(false);
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src = "../icon.png"/>
                <h1>Sign in to the Pigeon</h1>
            <p>www.Pigeon.com</p>
            <Button disabled={loading} onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login
const LoginContainer = styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`;
const LoginInnerContainer = styled.div`
padding:100px;
text-align:center;
background-color:white;
border-radius:10px;
border: 5px solid var(--purple);
>img{
    object-fit:contain;
    height:100px;
    margin-bottom:40px;
    border:2px solid var(--yellow);
    border-radius:20px;
}
>button{
    margin-top:50px;
    text-transform: inherit !important;
    background-color: var(--yellow);
    color:white;
}
`;
