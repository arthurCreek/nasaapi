import React from 'react';
import Particles from 'react-particles-js';

/************************************
**** Options for particle elements in header *******
*************************************/
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
		<div>
			<div className="header__text">
				<div className="header__text--container">
					<h1 className="header__h1">DISCOVER <span id="mars-text">MARS</span></h1>
					<h2 className="header__h2">Through Curiosity, Opportunity, and Spirit</h2>
				</div>
			</div>
        	<Particles params={options} className="header__particles"/>
		</div>
    )
}

export default Header;