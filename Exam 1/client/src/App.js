import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home/home'
import HomeUser from './components/homeuser/homeUser'
import Nav from './components/nav/Nav'
import Register from './components/register/register'

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path= '/home' component={Nav}/>
      <Route exact path='/home' component={HomeUser}/>
      <Route exact path='/register' component={Register}/>
    </div>
  );
}

export default App;
