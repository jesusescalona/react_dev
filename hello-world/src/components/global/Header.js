import React, { Component } from 'react';
import logo from './images/logo.svg';

class Header extends Component
{
   render()
   {
      return(
         <header>
            <figure>
               <img src={logo} alt="logo" />
            </figure>
            <h1>Hello World to React</h1>
         </header>
      );
   }
}

export default Header;