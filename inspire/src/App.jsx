//Main Application Script File

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Tristan"
    };
  }

  render() {
    return(
      <div className="App">
        <Navbar/>
        <h1>Welcome to Inspire</h1>
      </div>  
    )
  }


componentDidMount() {
  //fetch data once rendered
}
}


export default App;
