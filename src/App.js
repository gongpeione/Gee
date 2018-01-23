import React, { Component } from 'react';
import Layout from './Layout/';
import './Style/index.scss';
import './Style/async.scss';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Layout></Layout>
      </main>
    );
  }
}

export default App;