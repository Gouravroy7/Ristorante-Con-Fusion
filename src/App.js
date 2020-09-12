import React, { Component } from 'react';
import Main from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
class App extends Component {

  render(){
    // git push -u origin master
   return (
    <BrowserRouter>
      < div className="App">
        <Main />  
      </div>
     </BrowserRouter> 
    );
  }
}

export default App;
