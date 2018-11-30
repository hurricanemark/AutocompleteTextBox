import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import HideableText from './HideableText';
import AutoCompleteText from './AutocompleteText';
import CaliforniaCities from './CaliforniaCities';
import CaliforniaStadiums from './CaliforniaStadiums';
import StockSymbols from './StockSymbols';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	    ReactJS Rendering Auto-complete Text
	    <div className="app-Component">
	    	<li>Cities in CA:</li>
	    	<AutoCompleteText items={CaliforniaCities}/>
	    	<br /><br />
	    	<li>Sport venues:</li>
	    	<AutoCompleteText items={CaliforniaStadiums}/>
	    	<br /><br />
	    	<li>Stock Symbols:</li>
	    	<AutoCompleteText items={StockSymbols}/>
	    </div>
	</header>
	<footer>
    	    <div className="App-content">
	        <HideableText text="Can you save this world?" />
	    </div>
	    <div>
	    <a href="https://github.com/hurricanemark/AutocompleteTextBox">Visit my github repository here.</a>
	    </div>
	</footer>
      </div>

    );
  }
}

export default App;
