import React, { Component } from 'react';
import Counter from './counter'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Chat />
      </div>
    );
  }
}

export default App;
