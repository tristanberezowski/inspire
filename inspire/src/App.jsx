//Main Application Script File

import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Body from './components/Body';
import { initialState } from './contexts/View/reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  useEffect

  onProfileClick = () => {
    this.dispatch({ type: "SET_PROFILE" });
  };

  onHomeClick = () => {
    this.dispatch({ type: "SET_HOME" });
  };

  componentDidMount() {
    // fetch data
  }

  render() {

    return(
      <div className="App App-body">
        <Navbar viewMode={viewMode} onProfileClick={this.onProfileClick} onHomeClick={this.onHomeClick}/>
          <main>
            <Body viewMode={viewMode} onProfileClick={this.onProfileClick} />
          </main>
        {/*<Footer/>*/}
      </div>  
    )
  }
}


export default App;
