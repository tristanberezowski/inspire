//Main Application Script File

import React, {Component} from 'react';
import { UserProvider } from "./contexts/User/UserProvider"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import UserButton from './components/UserButton';
//export const ViewContext = React.createContext(null);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: 'home'
    };
  }

  onProfileClick = () => {
    this.setState({ viewMode: 'profile' });
  };

  onHomeClick = () => {
    this.setState({ viewMode: 'home' });
  };

  componentDidMount() {
    // fetch data
  }

  render() {
    const { viewMode } = this.state;

    return(
      <UserProvider>
        <div className="App App-body">
          <Navbar viewMode={viewMode} onProfileClick={this.onProfileClick} onHomeClick={this.onHomeClick}/>
            <main>
              <UserButton/>
              <Body viewMode={viewMode} onProfileClick={this.onProfileClick} />
            </main>
          {/*<Footer/>*/}
        </div>  
      </UserProvider>
    )
  }
}


export default App;
