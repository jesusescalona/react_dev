import React, { Component } from 'react';
import './global/css/style.css';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component
{
   render()
   {
      return(
         <section className="wrapper">
            <Header/>
            <Content/>
            <Footer/>
         </section>
      );
   }
}

export default App;