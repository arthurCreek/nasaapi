import React from 'react';
import Particles from 'react-particles-js';

const options = {
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": true,
                    "value_area": 800
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 1,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
                "enable": true,
	            "random": true,
	            "speed": .6,
	            "direction": "none",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
}

const Header = () => {

    return (
        <Particles params={options} className="header__particles"/>
    )
}

export default Header;