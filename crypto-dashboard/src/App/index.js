import React, { Component } from 'react';
import './App.css';

function Welcom(props){
  return(
    <h2>ayoub, {props.name}</h2>
  )
}

class App extends Component {
  render() {
    return (
   <Welcom name ={"ayou"}/>
    );
  }
}

export default App;
