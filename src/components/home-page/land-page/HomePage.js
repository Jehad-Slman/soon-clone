import LayoutBox from './LayoutBox';
import { Link } from 'react-router-dom';

import classes from './HomePage.module.css';

const HomePage = () => {

    return (
        <div className={classes.picture}>
            <div className={classes.container}>
                <h1>Soon Localization Agency</h1>
                <p>All your language needs met by a single flexible team.</p>
                <button type="button"><Link to='/about-us'>Get a Free Trial</Link></button>
                <div className={classes.layout}>
                    <LayoutBox num="10" des="Language Pairs"/>
                    <LayoutBox num="500K" des="Subtitled Minutes"/>
                    <LayoutBox num="7M" des="Translated Words"/>
                </div>
            </div>
        </div>
    )
};

export default HomePage;