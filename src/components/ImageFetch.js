import React, { useState, useEffect, useContext } from "react";
import NasaContext from '../context/nasa-img-context';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/************************************
**** API key from env *******
*************************************/
const API_KEY = process.env.REACT_APP_NASA_API;



/************************************
**** Retreive images from NASA api using axios and save with useContext *******
*************************************/
const ImageFetch = () => {
    const { images } = useContext(NasaContext);

    const [daily, setDaily] = useState([]);

    {/* 
        API call using axios that updates image variable
    */}
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

    {/* 
        Return images, if there are no images, return information
    */}
    if (daily.length > 0) {
        return (
            <div>
                <h3 className="image__showing">Showing: {images.date}</h3>
                <Carousel className="carousel">
                    {daily.map(image => (
                        <div key={1}>
                            <img src={image} alt="mars"/>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    } else {
        return (
            <div className="no-images">
                <p>There are no pictures for {images.rover.charAt(0).toUpperCase() + images.rover.slice(1)} on {images.date}.</p>
                <p>Please select another date within Mission Range.</p>
            </div>
        )
    }

};

export default ImageFetch;