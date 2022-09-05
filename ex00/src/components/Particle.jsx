import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Particle() {

    const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);

};
const particlesLoaded = (container) =>{
    console.log(container);
};
return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
        options={
            {
                	        "fullScreen": {
                	            "enable": true,
                	            "zIndex":-1
                	        },
                	        "particles": {
                	            "number": {
                	                "value":400,
                	                "density": {
                	                    "enable": true,
                	                    "value_area": 800
                	                }
                	            },
                	            "color": {
                	                "value": "#fff"
                	            },
                	            "shape": {
                	                "type": "circle"
                	            },
                	            "opacity": {
                	                "value": 0.5,
                	                "random": true,
                	                "anim": {
                	                    "enable": false,
                	                    "speed": 1,
                	                    "opacity_min": 0.1,
                	                    "sync": false
                	                }
                	            },
                	            "size": {
                	                "value":10,
                	                "random":true,
                	                "anim": {
                	                    "enable": false,
                	                    "speed": 40,
                	                    "size_min":0.1,
                	                    "sync":false
                	                }
                	            },
                	            "line_linked": {
                	                "enable": false,
                	                "distanse":500,
                	                "color": "#ffffff",
                	                "opacity":0.4,
                	                "width":2
                	            },
                	            "move": {
                	                "enable": true,
                	                "speed":2,
                	                "direction": "bottom",
                	                "random":false,
                	                "straight":false,
                	                "out-mode": "out",
                	                "attract": {
                	                    "enable": false,
                	                    "rotateX": 600,
                	                    "rotateY":1200
                	                }
                	            }
                	        },
                	        "interactivity":{
                	            "events": {
                	                "onhover": {
                	                    "enable": true,
                	                    "mode": "bubble"
                	                },
                	                "onclick": {
                	                    "enable": true,
                	                    "mode": "repulse"
                	                },
                	                "resize": true
                	            },
                	            "modes": {
                	                "grab": {
                	                    "distance":400,
                	                    "line_linked": {
                	                        "opacity": 0.5
                	                    }
                	                },
                	                "bubble": {
                	                    "distance": 400,
                	                    "size":4,
                	                    "duration":0.3,
                	                    "opacity": 1,
                	                    "speed": 3
                	                },
                	                "repulse": {
                	                    "distance":200
                	                },
                	                "push": {
                	                    "paticles_nb":4
                	                },
                	                "remove": {
                	                    "particles_nb":2
                	                }
                	            }
                	        },
                	        "retina_detect":true,
                	        "bacjground": {
                	            "color": "#0d47a1",
                	            "image": "",
                	            "position": "no-repeat",
                	            "size": "cover"
                	        }
                	    }
                }


    />
)

}

export default Particle
