import React from 'react';
import { Switch, Route } from 'react-router-dom';


function UpperNav(){
  return (
    <div>
      <style jsx>{`

      .navbar {
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
      }
      .navbar li{
      display:inline;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      }
      ul{
      margin-left:40.5%;
      }
  `}</style>
  <div className="navbar">
      <ul>
        <li>Home</li>
        <li>The People</li>
        <li>The Dec</li>
        <li>Log In</li>
        <li>Get Started</li>
      </ul>
      </div>
    </div>
  );
}

export default UpperNav;
