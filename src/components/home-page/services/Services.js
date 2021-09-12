import Carousel from "./Carousel";

import classes from './Services.module.css';
const Services = props => {

    return (
        <section className={`${classes.services} ${props.dark ? classes.dark : ''}`}>
            <h2>Services We Provide</h2>
            <p>We fuse flexibility, culture, and experience for complete multimedia localization solutions.</p>
            <div className={classes.slider}>
                <Carousel dark={props.dark}/>
            </div>
        </section>
    )
};

export default Services;