import Slider from 'react-slick';
import CarouselItem from './CarouselItem';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./over-writer.css";

export const Carousel = props => {

    let settings = {
        dot : true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
         <Slider {...settings}>

            <CarouselItem id={'Translation'} dark={props.dark}>
                <h2>Translation</h2>
                <p>Professional translation services for any type of content from/into any language</p>
            </CarouselItem>

            <CarouselItem id={'Subtitling'} dark={props.dark}>
                <h2>Subtitling</h2>
                <p>Written rendition in a foreign language of any type of audio/video material</p>
            </CarouselItem>

            <CarouselItem id={'Transcription'} dark={props.dark}>
                <h2>Transcription</h2>
                <p>Text-based alternative to the dialogue and narration of your video or audio content.</p>
            </CarouselItem>

            <CarouselItem id={'Dubbing'} dark={props.dark}>
                <h2>Dubbing</h2>
                <p>Professional translation services for any type of content from/into any language</p>
            </CarouselItem>

            <CarouselItem id={'Voice-Over'} dark={props.dark}>
                <h2>Voice Over</h2>
                <p>Replacing original dialogue in a video with lip-synced localized recordings.</p>
            </CarouselItem>

            <CarouselItem id={'Closed-Captioning'} dark={props.dark}>
                <h2>Closed Captioning</h2>
                <p>Matching transcribed text to the moving visuals on a screen.</p>
            </CarouselItem>

         </Slider>
    );
};

export default Carousel;