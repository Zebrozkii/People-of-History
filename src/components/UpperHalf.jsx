import React from 'react';
import { Switch, Route } from 'react-router-dom';
import decPic from '../assests/images/decPic.jpg';
import UpperNav from './UpperNav';

function UpperHalf(){
  return (
    <div>
      <style jsx>{`
      img{
      width:100%;
      }
      `}</style>
      <UpperNav/>
      <img src={decPic}/>
    </div>
  );
}

export default UpperHalf;
