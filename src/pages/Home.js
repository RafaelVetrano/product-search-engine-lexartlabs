import React from 'react';
import Header from '../components/Header';
import Style from './home.module.css';

function Home() {
  return (
    <div className={ Style.homePageStl }>
      <Header />
    </div>

  );
}

export default Home;
