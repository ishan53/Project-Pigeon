import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import  styled  from 'styled-components';
import Slidebar from './components/Sidebar';
import Chat from './components/chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
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
        <Slidebar></Slidebar>
        <Switch>
          <Route path="/" exact>
            <Chat/>
            </Route>
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
