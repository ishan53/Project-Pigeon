import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import './Chat.css';
import firebase from 'firebase';
import Button from '@material-ui/core/Button/Button';


function Chat() {

    const [user] = useAuthState(auth);
    const [ input, setInput ] = useState('');
    const [channelName, setChannelName] = useState('');
    const { channelId } = useParams();
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        if(channelId) {
            db.collection('channels').doc(channelId).onSnapshot((snapshot) => (
                setChannelName(snapshot.data().name)
            ));
            db.collection('channels').doc(channelId).collection('messages')
                .orderBy('timestamp','asc').onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput('');
        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
    <ChatContainer>
        <>
        <Header>
            <HeaderLeft>
                <h4>
                    <strong># {channelName}</strong>
                </h4>
                <StarBorderOutlined/>
            </HeaderLeft>
            <HeaderRight>
                <p>
                    <InfoOutlined/>Details
                </p>
            </HeaderRight>
        </Header>
        <ChatMessages className="chat_body">
            {messages.map((message) => (
                <p key={message._id} className={`chat_message 
                    ${message.name === user.displayName && 'chat_reciever'}`}>
                    <span className="chat_name">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chat_timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
            ))}
        </ChatMessages>
        
        <ChatInputContainer>
            <form onSubmit={sendMessage}>
                <input value = {input} onChange={e => setInput(e.target.value)} placeholder={`Message #ROOM`}/>
                <Button hidden type='submit'>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>

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
background-color: #EDEDED;
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
