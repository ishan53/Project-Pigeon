import React from 'react'
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
function Header() {
    const [user] = useAuthState(auth);
    return <HeaderContainer>
        {/* Header Left */}
    <HeaderLeft>
        <HeaderAvatar
        onClick = {()=>auth.signOut()}
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTimeIcon/>  
    </HeaderLeft>
    {/* Header Search */}
    <HeaderSearch>
        <SearchIcon/>
        <input placeholder="Search"/>
    </HeaderSearch>
     {/* HeaderRight */}
    <HeaderRight>
        <HelpOutlineIcon/>
    </HeaderRight>
    </HeaderContainer>
}

export default Header
const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
background-color:white;
text-align:center;
display:flex;
padding: 0 50px;
color:var(--yellow);
border: 2px var(--yellow) solid;
>input{
    background-color:transparent;
    border:none;
    text-align:center;
    min-width:30vw;
    color:var(--light-black);
    outline:none;
}
`;
const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color:var(--purple);
color:white;
border-bottom:2px solid var(--yellow);
`;
const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
    color:var(--red);
    cursor:pointer;
}
`;

const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;
    >.MuiSvgIcon-root{
        color:var(--red);
        margin-left:auto;
        margin-right:20px;
        cursor:pointer;
    }
`;
const HeaderAvatar = styled(Avatar)`
cursor:pointer;
border:2px solid var(--yellow);
:hover{
    opacity:0.8;
    color:var(--red);
}
`;