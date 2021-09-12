import Card from "../Card";
import Service from "./Service";

import classes from './OurServices.module.css';
const OurServises = props => {

    return (
        <Card darkMood={props.darkMood}>
            <h2 className={classes.title}>Our Services</h2>
            <div className={classes.services}>
                <Service darkMood={props.darkMood} id={'Translation'}>
                    <h2>Translation</h2>
                    <p>Professional translation services for any type of content from/into any language</p>
                </Service>

                <Service darkMood={props.darkMood} id={'Subtitling'}>
                    <h2>Subtitling</h2>
                    <p>Written rendition in a foreign language of any type of audio/video material</p>
                </Service>

                <Service darkMood={props.darkMood} id={'Transcription'}>
                    <h2>Transcription</h2>
                    <p>Text-based alternative to the dialogue and narration of your video or audio content.</p>
                </Service>

                <Service darkMood={props.darkMood} id={'Dubbing'}>
                    <h2>Dubbing</h2>
                    <p>Professional translation services for any type of content from/into any language</p>
                </Service>

                <Service darkMood={props.darkMood} id={'Voice-Over'}>
                    <h2>Voice Over</h2>
                    <p>Replacing original dialogue in a video with lip-synced localized recordings.</p>
                </Service>

                <Service darkMood={props.darkMood} id={'Closed-Captioning'}>
                    <h2>Closed Captioning</h2>
                    <p>Matching transcribed text to the moving visuals on a screen.</p>
                </Service>
            </div>
        </Card>
    );

};

export default OurServises;