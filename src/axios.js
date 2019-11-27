import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
    const = [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            const photos = res.data;
            setPhotos(photos);
        });
    }), []);

    return (
        <div>
            <ul>
                {photos.map(photo => (
                    <li>{photo.url}</li>
                ))}
            </ul>
        </div>
    );
};

export default Axios;