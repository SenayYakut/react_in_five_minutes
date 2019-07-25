/*import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

function App() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }

  export default App
  */
import React from "react";
import React, {Component} from 'react';
import './App.css';
import {Color, Animal} from './Shapes';

 require('./App.css');
 var Color = require('./Shapes');

 
 class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="colors">
          <Color name="red"/>
          <Color name="green"/>
          <Color name="blue"/>
        </div>
      </div>
    );
  }
}
module.exports=App;

var {Foo} = require('./Shapes');
var {Bar} = require('./Shapes');
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="colors">
          <Foo name="red"/>
          <Foo name="green"/>
          <Foo name="blue"/>
        </div>
        <div className="animals">
          <Bar name="dog" />
          <Bar name="cat" />
          <Bar name="bird" />
        </div>
      </div>
    );
  }
}