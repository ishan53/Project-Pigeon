import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button/Button';
import {db} from '../firebase';
import firebase from 'firebase'
function ChatInput({channelName, channelId}) {
    const [input,setInput] = useState('');
    const sendMessage = e =>{
        e.preventDefault();

        // if(!channelId){
        //     return false;
        // }
        // db.collection('rooms').doc(channelId).collection('messages').add({
        //     message:input.toString().indexOf('.'),
        //     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        //     user:'Ishan Singhal',
        //     userImage:'https://pbs.twimg.com/profile_images/660589005398933504/y-lotb07_400x400.jpg'
        // });
        // setInput('');
    }
    return (
        <ChatInputContainer>
            <form>
                <input value = {input} 
                onChange={e => setInput(e.target.value)} placeholder={`Message #ROOM`}/>
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput
const ChatInputContainer = styled.div`
border-radius:20px;
>form{
    position:relative;
    display:flex;
    justify-content:center;
}
>form > input{
    position:fixed;
    bottom:30px;
    width:60%;
    border: 2px solid var(--yellow);
    border-radius: 3px;
    padding:20px;
    outline:none;
}
>form >button{
    display:none !important;
}
`;