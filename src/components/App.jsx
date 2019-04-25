import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UpperHalf from './UpperHalf';
import Home from './Home';


function App(){
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/UpperHalf' component={UpperHalf}/>
      </Switch>
    </div>
  );
}

export default App;
