//React App
import React from 'react';
import ReactDOM from 'react-dom';
import Left from './components/left_components/Left';
import Right from "./components/right_components/Right";

ReactDOM.render(
  <div id="main">
    <Left />
    <Right />
  </div>,
  document.getElementById("root")
);


//Spotify Backend