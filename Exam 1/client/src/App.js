import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home/home'
import HomeUser from './components/homeuser/homeUser'

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={HomeUser}/>
    </div>
  );
}

export default App;
