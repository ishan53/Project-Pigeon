import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import  styled  from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App(){
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
        {!user?(
          <Login/>
        ):(
          <>
      <Header/>
      <AppBody>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path="/channels/:channelId" component={Chat} />
        </Switch>
        </AppBody>
        </>
        )}
    </Router>
    </div> 
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;
