import React, { Component } from 'react';
import Counter from './counter'
import Chat from './Chat'
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}

        <Auth>
          <Chat />
        </Auth>
      </div>
    );
  }
}

export default App;
