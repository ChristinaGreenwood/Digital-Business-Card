import React, { Component } from 'react';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core'

  
  import { 
    faCheckSquare, 
    faCoffee,
    faEnvelope,
    faBell
   } from '@fortawesome/free-solid-svg-icons'

  library.add( faCheckSquare, faCoffee, faEnvelope, faBell )



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    );
  }
}