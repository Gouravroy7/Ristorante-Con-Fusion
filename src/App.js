import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import BlogCard from './BlogCard';
class App extends React.Component {
  render(){
   return (
    <div className="App">
       <Navbar darkcolor="primary">
         <div className="container">
           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
         </div>
       </Navbar>
     </div>
    );
  }
}

export default App;
