import React, { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_NASA_API;

const ImageFetch = () => {
    const [daily, setDaily] = useState([]);

    async function fetchData() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`).then(res => {
            const data = res.data.photos;
            const daily = Object.keys(data).map(index => data[index].img_src);
            setDaily(daily);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="image__container">
            {daily.map(url => (
                <img src={url} alt="nasa rover" className="image__item"/>
            ))}
        </div>
    );
};

export default ImageFetch;