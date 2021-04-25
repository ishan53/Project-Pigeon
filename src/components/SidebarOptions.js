import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterChannel } from '../features/appSlice';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

function SidebarOptions({ Icon, title,addChannelOption, id, isChannel }) {
    const addChannel = () =>{
        const channelName = prompt('Please enter the channel name');

        if(channelName){
            db.collection('channels').add({
                name:channelName,
            });
        }
    };

    if(addChannelOption) return (
        <SidebarOptionsContainer onClick={addChannel}>
            <Icon fontSize="small" style={{padding:10}} />
            <h3>{title}</h3>
        </SidebarOptionsContainer>
    );

    if(isChannel) return (
        <SidebarOptionsContainer>
                <SidebarOptionsChannel>
                    <Link to={`/channels/${id}`} style={{color: "black", textDecoration: "none", padding: "10px"}}>
                        <span style={{paddingRight: "10px"}}>#</span>{title}
                    </Link>
                </SidebarOptionsChannel>
        </SidebarOptionsContainer>
    );

    return (
        <SidebarOptionsContainer>
                <SidebarOptionsChannel>
                    <span style={{paddingRight: "10px"}}>#</span>{title}
                </SidebarOptionsChannel>
        </SidebarOptionsContainer>
    );
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
display:flex;
font-size:12px;
align-items:center;
padding-left:2px;
cursor:pointer;
:hover{
    opacity:0.9;
    background-color:var(--yellow);
}
>h3{
    font-weight:500;
}
>h3>span{
    padding:15px;
}
`;
const SidebarOptionsChannel = styled.h3`
padding:10px 0;
font-weight:300;
text-decoration: none;
`;