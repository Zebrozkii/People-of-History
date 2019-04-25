import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UpperNav from './UpperNav';


function Home(){
  return (
    <div>
      <UpperNav/>
    <h1>Home Jimmy</h1>
    <Link to="/UpperHalf">See The Squad</Link>
    </div>
  );
}

export default Home;
