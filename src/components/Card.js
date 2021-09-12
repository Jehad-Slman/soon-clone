import { Fragment } from "react";

import classes from "./Card.module.css"

const Card = props => {

    return (
        <Fragment>
            <div className={classes.photo}></div>
            <section className={`${classes.main} ${props.darkMood ? classes.dark : ''}`}>
                {props.children}
            </section>
        </Fragment>
    )
};

export default Card;