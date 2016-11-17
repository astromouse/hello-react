import AwesomeComponent from './awesome-component.jsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

export default App;
