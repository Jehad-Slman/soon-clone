import Card from '../Card';

import classes from './About.module.css';

const About = props => {

    return (
        <Card darkMood={props.darkMood}>
            <div className={`${classes.about} ${props.darkMood ? classes.dark : ''}`}>
                <h2>About "Soon"</h2>
                <p>SOON is a full-suite localization agency that provides a full spectrum of post-production services – from content translation to multimedia transcreation.We specialize in bringing brands into new markets and have an impressive track record in translation, transcription, subtitling, dubbing, captioning, and voice-over for a wide variety of clients, from small start-ups to multi-million dollar enterprises. No matter where on the spectrum you are, Noon can tailor the right service to your sector and help you find your new voice.</p>
                <h2>Our Team</h2>
                <p>With over 15 years of international experience between us, SOON's team is made up of native linguists, talented voice-over actors, skilled technicians, and digital gurus who are on the cutting edge of the industry.Our approach is to uniquely combine a team of in-house talents with a vast network of qualified freelancers; creating a truly flexible team that can meet the needs of each individual project.</p>
                <h2>SOON's Philosophy</h2>
                <p>Our pledge to our clients is we will always roll up our sleeves and leave no stone unturned to give you the peace of mind that your language will change while your message will not.</p>
            </div>
        </Card>
    );
};

export default About;