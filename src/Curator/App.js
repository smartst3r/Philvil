import React, {useState, Component} from 'react';
import './App.css';
import Curator from './Curator/Curator';
import './Curator/Curator.css';

class App extends Component {
  // will need to make this take info from db -- this is test info
  state = {
    curators: [
      {name: 'phil', party: 'dem',subcount: 44, picture: 'null'},
      {name: 'phillip', party: 'lib',subcount: 13, picture: 'null'},
      {name: 'phillis', party: 'reb',subcount: 53, picture: 'null'}
    ]
  }

  render(){  
  return (
    <div className="App">
      {this.state.curators.map(curator => {
        return <Curator 
        onClick={}
        name={curator.name} 
        party={curator.party}
        subcount={curator.subcount}
        picture={curator.picture}
        />
      })}
      
    </div>
  );
  }
}
export default App;
