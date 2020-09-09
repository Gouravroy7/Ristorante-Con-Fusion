import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
class App extends React.Component {

  state ={
    showList : true
  }
 arrayCards=[
{
  title : 'Title 1',
  description : 'Description1 Description1 Description1 Description1'
},
{
  title : 'Title 2',
  description : 'Description2 Description2 Description2 Description2'
},
{
  title : 'Title 3',
  description : 'Description3 Description3 Description3 Description3'
}
];

 displayCards = this.arrayCards.map(function(item,pos){
 return (
  <BlogCard  key={pos} title={item.title} description={item.description}/>
 )
})

hideList = () => {
  //alert("Clicked")
   this.setState(
     {
     showList : this.state.showList?false:true
    }
  );
};

render(){
 return (
    <div className="App">
      <button onClick={this.hideList}>{this.state.showList?"Hide Cards":"Show Cards"}</button><br/><br/>
      {this.state.showList?this.displayCards:null}
     </div>
  );
 }
}

export default App;
