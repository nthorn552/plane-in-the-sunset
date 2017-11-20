import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BackgroundVideo from './src/app/home/BackgroundVideo';

class App extends Component {
  render() {
    return (
      <BackgroundVideo />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
