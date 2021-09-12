import { Fragment } from "react";
import Flix from "./Flix";

import classes from './Offers.module.css';

const Offers = props => {

    return (
        <div className={props.dark ? classes.dark : ''}>
            <Flix>
                <div className={classes.offer}>
                    <h2>Flexible, Reliable Approach</h2>
                    <p>We offer an innovative flexible approach where you can adjust the budget, time frame, and the number of involved team members of your project to perfectly meet your needs and expectations.</p>
                </div>
                <div>
                    <img  src="https://noon.limited/storage/projects/noon3.png" alt="image" />
                </div>
            </Flix>

            <Flix>
                <div>
                    <img src="https://noon.limited/storage/projects/noon2.png" alt="image" />
                </div>
                <div className={classes.offer}>
                    <h2>Real, Native Linguists</h2>
                    <p>We at Noon believe in localization rather than only translation that’s why we adhere to interpret the culture behind the words. No automated translation. Our team is made up of over 120 experienced, native translators and voice-over specialists.</p>
                </div>
            </Flix>

            <Flix>
                <div className={classes.offer}>
                    <h2>International Quality Standard</h2>
                    <p>Rest assured your project is in good hands. We adopt the European quality standard ISO 17100:2015, which sets the quality standard for translation services.</p>
                </div>
                <div>
                    <img src="https://noon.limited/storage/projects/noon4.png" alt="image" />
                </div>
            </Flix>
        </div>
    );
};

export default Offers;