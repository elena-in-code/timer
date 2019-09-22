import React from 'react';
import './Header.scss';
import Title from './components/title/Title';

const Header = () => (
  <div className="App">
    <Title role='primary' titleContent='Timer'/>
    <Title role='secondary' titleContent='Set up the timer and choose a theme'/>
  </div>
);


export default Header;