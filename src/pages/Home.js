import { Fragment } from 'react';
import HomePage from '../components/home-page/land-page/HomePage';
import Services from '../components/home-page/services/Services';
import Offers from '../components/home-page/offers/Offers';
import Intro from '../components/home-page/offers/Intro';

const Home = props => {

    return (
        <Fragment>
            <HomePage />
            <Services dark={props.darkMood} />
            <Offers dark={props.darkMood} />
            <Intro dark={props.darkMood} />
        </Fragment>
    );
};

export default Home;