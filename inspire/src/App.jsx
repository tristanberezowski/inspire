//Main Application Script File

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home_menu from './components/home_menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Tristan"
    };
  }

  render() {
    return(
      <div className="App App-body">
        <Navbar/>
          <main>
            <h1>Welcome to Inspire</h1>
            <Home_menu/>
          </main>
        <Footer/>
      </div>  
    )
  }


componentDidMount() {
  //fetch data once rendered
}
}


export default App;
