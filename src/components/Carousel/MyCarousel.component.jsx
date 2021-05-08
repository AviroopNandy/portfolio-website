import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/img/carousel/slide1.webp";
// import slide4 from "../../assets/img/carousel/slide4.jpg";
// import slide3 from "../../assets/img/carousel/slide3.webp";
// import ScrollDown from "../ScrollDown/ScrollDown.component";

import "./MyCarousel.style.css";

const MyCarousel = () => {
    return(
        <div id="home">
            <img
                className="d-block w-100 custom-img"
                src={ slide1 }
                alt="First slide"
            />
            {/* <Carousel controls={ false } indicators interval={ 3000 } pause={ false }>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={ slide1 }
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={ slide4 }
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={ slide3 }
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> */}
            {/* <ScrollDown /> */}
        </div>
    );
}

export default MyCarousel;