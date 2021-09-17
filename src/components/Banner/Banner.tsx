import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

import SliderBadag from "../../images/slider-badag.jpg"
import SliderBadging from "../../images/slider-badging.jpg"
import SliderScale from "../../images/slider-scale.jpg"
import SliderScales from "../../images/slider-scales.jpg"


export function Banner() {
    const images = [
        {
            id: 1,
            image: SliderBadag
        },
        {
            id: 2,
            image: SliderBadging
        },
        {
            id: 3,
            image: SliderScale
        },
        {
            id: 4,
            image: SliderScales
        }
    ];

    const SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <div className="mx-auto px-7 relative mt-5 pb-6 w-full h-full  overflow-hidden lg:max-w-screen-lg ">
            <Slider className="" {...SliderSettings}>
                {images.map(image => (
                    <div key={image.id} className="shadow-lg">
                        <img className="duration-300 border-l-4 border-r-4 border-transparent rounded" src={image.image} alt={String(image.id)} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
