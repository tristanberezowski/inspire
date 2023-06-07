//Main Application Script File

import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { initialState } from './contexts/View/reducer';
import { ViewModeProvider } from './contexts/View/view';

class App extends Component {

  componentDidMount() {
    // fetch data
  }

  render() {

    return(
      <ViewModeProvider>
        <div className="App App-body">
          <Navbar />
            <main>
             <Body />
            </main>
        </div>  
      </ViewModeProvider>
    )
  }
}


export default App;
