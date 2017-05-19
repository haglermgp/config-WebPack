import React from 'react';
import {render} from 'react-dom';
import Awesom from './awesom.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <h1> Hello React!</h1>
        <Awesom />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
