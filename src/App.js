import React, {useState, Component} from 'react';
import './App.css';
import Curator from './Curator/Curator';
import './Curator/Curator.css';
import Layout from './components/Layout/Layout';

import DraftBuilder from './containers/DraftBuilder/DraftBuilder'

class App extends Component {

  render(){  
  return (
    <div>
      <Layout>
        <DraftBuilder />
        
      </Layout>
    </div>
  );
  }}
export default App;
