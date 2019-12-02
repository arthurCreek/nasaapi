import React, { useState, useEffect, useContext } from "react";
import NasaContext from '../context/nasa-img-context';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const API_KEY = process.env.REACT_APP_NASA_API;

const ImageFetch = () => {
    const { images } = useContext(NasaContext);

    const [daily, setDaily] = useState([]);

    async function fetchNasaImages() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${images.rover}/photos?earth_date=${images.date}&page=1&api_key=${API_KEY}`).then(res => {
            const data = res.data.photos;
            const daily = Object.keys(data).map(index => data[index].img_src);
            setDaily(daily);
        });

        
    }
    useEffect(() => {
        fetchNasaImages();
        // eslint-disable-next-line
    }, [ images ]);


    return (
        <Carousel className="carousel">
            {daily.map(image => (
                <div key={1}>
                    <img src={image} alt="mars"/>
                </div>
            ))}
        </Carousel>
    );
};

export default ImageFetch;