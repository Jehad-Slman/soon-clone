import { Fragment } from "react";
import Card from "../Card";

import classes from './SDetail.module.css';

const SDetail = props => {

    return (
        <Card darkMood={props.darkMood}>
            <div className={`${classes.detail} ${props.darkMood ? classes.dark : ''}`}>
                {
                    props.id === 'Translation' ?
                    <Fragment>
                    <h2>Get your content translated from and to over 12 languages by native linguists.</h2>
                    <p>Whatever the field, language, or size of your content. Noon team is there to deliver the best results, with an exceptional capacity in Arabic & English lanaguages.We are committed to always providing human translation, as machine translation is not yet sufficiently sophisticated to translate documents with the understanding and nuance that human translators provide.</p>
                    <p>Whatever the field, language, or size of your content. Noon team is there to deliver the best results, with an exceptional capacity in Arabic & English lanaguages.We are committed to always providing human translation, as machine translation is not yet sufficiently sophisticated to translate documents with the understanding and nuance that human translators provide.</p>
                    <p>Whatever the field, language, or size of your content. Noon team is there to deliver the best results, with an exceptional capacity in Arabic & English lanaguages.We are committed to always providing human translation, as machine translation is not yet sufficiently sophisticated to translate documents with the understanding and nuance that human translators provide.</p>
                    </Fragment>
                    : null
                }

                {
                    props.id === 'Subtitling' ?
                    <Fragment>
                    <h2>Benefit from years of experience in subtitling multimedia for leading global brands.</h2>
                    <p>When it comes to multimedia, your greatest key to multilingual access is making sure your content is subtitled and translated to reach just the right audience.At Noon, we pride ourselves on being your audiovisual translation partner, from Arabic and English into all other languages and vice versa.From promotional, to educational film translation services and everything in between, we are here to support you through all verticals. Our subtitling service covers films, video advertisements, product or service presentations, teleconferences, business meetings, conversations, interviews, speeches, seminars, courses, workshops, TV programs, documentaries, while preserving the quality and authenticity of the audiovisual message.</p>
                    <p>When it comes to multimedia, your greatest key to multilingual access is making sure your content is subtitled and translated to reach just the right audience.At Noon, we pride ourselves on being your audiovisual translation partner, from Arabic and English into all other languages and vice versa.From promotional, to educational film translation services and everything in between, we are here to support you through all verticals. Our subtitling service covers films, video advertisements, product or service presentations, teleconferences, business meetings, conversations, interviews, speeches, seminars, courses, workshops, TV programs, documentaries, while preserving the quality and authenticity of the audiovisual message.</p>
                    <p>When it comes to multimedia, your greatest key to multilingual access is making sure your content is subtitled and translated to reach just the right audience.At Noon, we pride ourselves on being your audiovisual translation partner, from Arabic and English into all other languages and vice versa.From promotional, to educational film translation services and everything in between, we are here to support you through all verticals. Our subtitling service covers films, video advertisements, product or service presentations, teleconferences, business meetings, conversations, interviews, speeches, seminars, courses, workshops, TV programs, documentaries, while preserving the quality and authenticity of the audiovisual message.</p>
                    </Fragment>
                    : null
                }

                {
                    props.id === 'Transcription' ?
                    <Fragment>
                    <h2>Boost the chances of your audiovisual being found and understood with our 100% Human-generated transcription service.</h2>
                    <p>Converting audio and video into written text is a job best left to the experts. When there are multiple speakers, technical terms, and diverse accents, transcribing voice to text can be a complicated process.Our extensive network of transcriptionists, typists and data entry personnel allows us to select the right professional for your project.</p>
                    <p>Converting audio and video into written text is a job best left to the experts. When there are multiple speakers, technical terms, and diverse accents, transcribing voice to text can be a complicated process.Our extensive network of transcriptionists, typists and data entry personnel allows us to select the right professional for your project.</p>
                    <p>Converting audio and video into written text is a job best left to the experts. When there are multiple speakers, technical terms, and diverse accents, transcribing voice to text can be a complicated process.Our extensive network of transcriptionists, typists and data entry personnel allows us to select the right professional for your project.</p>
                    </Fragment>
                    : null
                }

                {
                    props.id === 'Dubbing' ?
                    <Fragment>
                    <h2>Get access to hundreds of native talents with our dubbing service.</h2>
                    <p>From script adaptation through casting, recording and mixing, NOON provides one-stop, complete post-production services</p>
                    <p>From script adaptation through casting, recording and mixing, NOON provides one-stop, complete post-production services</p>
                    <p>From script adaptation through casting, recording and mixing, NOON provides one-stop, complete post-production services</p>
                    <ul>
                        <li>Dedicated team of specialists and technicians for the dubbing services</li>
                        <li>World-class studios, equipment and recording softwares.</li>
                        <li>Guarantee of maintaining excellent verbal performance, capturing the tone of the original actors, and matching the lip movement, without compromising the messages in the original work.</li>
                    </ul>
                    <h4>We dub the following content:</h4>
                    <ul>
                        <li>TV series & feature films</li>
                        <li>Theatrical</li>
                        <li>Cartoons and animation</li>
                        <li>Kids songs</li>
                        <li>Documentaries</li>
                        <li>TV & radio commercials</li>
                    </ul>
                    </Fragment>
                    : null
                }

                {
                    props.id === 'Closed-Captioning' ?
                    <Fragment>
                    <h2>Remove all barriers and make your content more accessible with our flawless video captioning service.</h2>
                    <p>Closed captioning enables you to get more value from your existing video content by appealing to a wider audience including those of the hard-of-hearing.We offer annotation service by providing copies that include all audio sounds, sound effects, speaker IDs, and other non-speech elements, with precise timecodes ready for use on any video platform.Whether your project is a movie, television show, YouTube series, broadcast media, a corporate video, or standalone projects, we deliver excellent, cost-effective closed captioning results.</p>
                    <p>Closed captioning enables you to get more value from your existing video content by appealing to a wider audience including those of the hard-of-hearing.We offer annotation service by providing copies that include all audio sounds, sound effects, speaker IDs, and other non-speech elements, with precise timecodes ready for use on any video platform.Whether your project is a movie, television show, YouTube series, broadcast media, a corporate video, or standalone projects, we deliver excellent, cost-effective closed captioning results.</p>
                    <p>Closed captioning enables you to get more value from your existing video content by appealing to a wider audience including those of the hard-of-hearing.We offer annotation service by providing copies that include all audio sounds, sound effects, speaker IDs, and other non-speech elements, with precise timecodes ready for use on any video platform.Whether your project is a movie, television show, YouTube series, broadcast media, a corporate video, or standalone projects, we deliver excellent, cost-effective closed captioning results.</p>
                    </Fragment>
                    : null
                }

                {
                    props.id === 'Voice-Over' ?
                    <Fragment>
                    <h2>Experience the voiceover quality your project deserves with top voice actors in the Middle East.</h2>
                    <p>We get pretty serious when it comes to providing professional Arabic voice over service. As an Arabic voice over agency with native accents, it's where our team flexes his muscles.With a spectrum of professional voiceover actors, we cover all the arabian dialects with native accents.</p>
                    <p>We get pretty serious when it comes to providing professional Arabic voice over service. As an Arabic voice over agency with native accents, it's where our team flexes his muscles.With a spectrum of professional voiceover actors, we cover all the arabian dialects with native accents.</p>
                    <p>We get pretty serious when it comes to providing professional Arabic voice over service. As an Arabic voice over agency with native accents, it's where our team flexes his muscles.With a spectrum of professional voiceover actors, we cover all the arabian dialects with native accents.</p>
                    </Fragment>
                    : null
                }
            </div>    
        </Card>
    );
};

export default SDetail;