import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = props => {

    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    //toggling the links visibility state on mobiles
    const toggleList = () => {
        setShow(prevState => {return prevState? false : true});
    };

    //changing the nav color on scrolling
    const scrollHandler = scrol => {
        window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
    };
    window.addEventListener('scroll', scrollHandler);

    const toggleDarkMood = () => {
        props.darkMoodHandler();
    }

    return (
        <header className={`${classes.header} ${scrolled ? classes.scroll : ''}`}>
            <nav className={classes.nav}>
                <h2 className={classes.logo}><span>S</span>oon</h2>
                <div className={`${show? classes.show : classes.toggle}`}>
                    <ul className={`${show? classes.show : classes.list}`}>
                        <li><NavLink activeClassName={classes.active} to="/Home">Home</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/services">services</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/about-us">About Us</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                   
                    <div className={`${show? classes.moodS : classes.mood}`}>
                        <label htmlFor="switch">Light</label>
                        <input onChange={toggleDarkMood} id="switch" type="checkbox" />
                        <label htmlFor="switch">Dark</label>
                    </div>
                </div>
                <button onClick={toggleList} className={classes.listBTN}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
        </header>
    );
};

export default Header;