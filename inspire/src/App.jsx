//Main Application Script File

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
export const ViewContext = React.createContext(null);

class App extends Component {
  const [viewMode, setViewMode] = useState('Home');

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
