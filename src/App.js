import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';
import Connect from './components/Connect/Connect';
import Transact from './components/Transact/Transact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Search/>
            <Connect/>
            <Transact/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
