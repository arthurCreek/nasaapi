import React from 'react';
import ImageFetch from './ImageFetch';
import Header from './Header';
import Search from './Search';
import '../styles/styles.scss';


const Layout = () => {

  return (
    <div className="App">
      <Header />
      <Search />
      <ImageFetch />
    </div>
  );
};

export default Layout;
