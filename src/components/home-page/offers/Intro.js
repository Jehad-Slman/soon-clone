import { Fragment } from "react";
import { Link } from "react-router-dom";
import Flix from "./Flix";

import classes from './Intro.module.css';

const Intro = props => {
    
    const whoAreWe = <div className={classes.waw}>
    <h2>Who we are?</h2>
        <p>SOON is a full-suite localization agency that provides a full spectrum of post-production services – from content translation to multimedia transcreation.</p>
        <p>We specialize in bringing brands into new markets through translation, transcription, subtitling, dubbing, closed-captioning, and voice-over.</p>
        <p>Our expertise covers almost all verticals and industries;</p>
        <ul>
            <li>Legal Translation Services</li>
            <li>Medical Translation Services</li>
            <li>General Translation</li>
            <li>Economy & Finance Translation</li>
            <li>Website Translation</li>
            <li>Ecommerce Translation</li>
            <li>Media Content Localization</li>
            <li>Software Localization</li>
            <li>App Localization</li>
            <li>Game Localization Services</li>
        </ul>
    </div>;

    return (
        <Fragment>
            <Flix className={`${classes.intro} ${props.dark ? classes.dark : ''}`}>
                {whoAreWe}
                <div className={classes.stories}>
                    <h2>SOON Stories</h2>
                    <Flix className={classes.intro}>
                        <div>
                            <img src="https://www.noon.limited/storage/stories/ffoI3Q5l8ooTWJl18dhdbTYDtnpGOPbxHU4Pmo9O.jpeg" alt="image"/>
                            <h4>Peppa Has a New Voice Actress</h4>
                            <p>Though Fox’s Family Guy recently put an end to Peppa Pig in one of their episodes, the Peppa Pig family has big news for us:  Harley Bird steps down as the voice actress of Peppa Pig. How long has Harley Bird voiced Peppa Pig? Harley Bird has been the voice of the lovable pig character for 18 long years. “The people that work on Peppa Pig have become like a family to me and they’ve given me some unforgettable memories,” Bird said. She has been voicing the popular swine since she was five years old. Harley, now 18, appeared in a total of 185 episodes.</p>
                        </div>

                        <div>
                            <img src="https://www.noon.limited/storage/stories/vIWkR46dieQq7F9pGkaC1KopM11zKmLRGo52o91N.jpeg" alt="image"/>
                            <h4>What is Translation</h4>
                            <p>Translation is the communication of meaning from one language (the source) to another language (the target). Translation refers to written information, whereas interpretation refers to spoken information. The purpose of translation is to convey the original tone and intent of a message, taking into account cultural and regional differences between source and target languages.</p>
                        </div>
                    </Flix>
                </div>
            </Flix>

            <div className={classes.trial}>
                <h2>We offer it and look dang good while doing it. Check for yourself now.</h2>
                <button><Link to='/about-us'>Get a Free Trial</Link></button>
            </div>
        </Fragment>
    );
};

export default Intro;