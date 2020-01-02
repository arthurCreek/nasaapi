import React, { useEffect, useReducer} from 'react';
import imagesReducer from '../reducers/images';
import ImageFetch from './ImageFetch';
import Header from './Header';
import Search from './Search';
import NasaContext from '../context/nasa-img-context';
import '../styles/styles.scss';


const Layout = () => {
  const [images, dispatch] = useReducer(imagesReducer, {date: '2015-01-10', rover: 'curiosity'})

  {/* 
      Save images to local storage if they are changed
  */}
  useEffect(() =>{
    localStorage.setItem('images', JSON.stringify(images))
  }, [images])

  return (
    {/* 
      Context provider for the app
    */}
    <NasaContext.Provider value={{images, dispatch}} className="App">
      <Header />
      <Search />
      <ImageFetch />
    </NasaContext.Provider>
  );
};

export default Layout;
