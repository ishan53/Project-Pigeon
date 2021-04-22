import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import {useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './ChatInput'
function Chat() {
    const roomId = useSelector(()=>{
        if(selectRoomId){
            return selectRoomId;
        }
        else{
            return " ";
        }
    });
    // const [roomDetails] = useDocument(
    //     roomId && db.collection('rooms').doc(roomId)
    // )
    // const [roomMessages] = useCollection(
    //     roomId && 
    //     db
    //     .collection('rooms')
    //     .doc(roomId)
    //     .collection('messages')
    //     .orderBy("timestamp","asc")
    // );
    // console.log(roomDetails);
    // console.log(roomMessages);
    return (
    <ChatContainer>
        <>
        <Header>
            <HeaderLeft>
                <h4>
                    <strong>#Room-name</strong>
                </h4>
                <StarBorderOutlined/>
            </HeaderLeft>
            <HeaderRight>
                <p>
                    <InfoOutlined/>Details
                </p>
            </HeaderRight>
        </Header>
        <ChatMessages>

        </ChatMessages>
        <ChatInput
        channelId={roomId}
        />
        </>
    </ChatContainer>
    )
}

export default Chat
const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
margin-top:60px;
`;
const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;
`;
const HeaderLeft = styled.div`
display:flex;
align-items:center;
>h4{
    display:flex;
    text-transform:lowercase;
    margin-right:5px;
}
>h4> .MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
}
`;
const HeaderRight = styled.div`
>p{
    display:flex;
    align-items:center;
    font-size:14px;
    color:var(--yellow);
}
>p>.MuiSvgIcon-root{
    margin-right:5px !important;
    font-size:16px;
}
`;
const ChatMessages = styled.div``;
// const ChatInput = styled.div``;
