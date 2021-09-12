import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import ScrollToTop from './components/ScrollToop';

import classes from './App.module.css';

const App = () => {

  const [darkMood, setDarkMood] = useState(false);

  const darkMoodHandler = dark => {
    setDarkMood(prevState => {return prevState? false : true});
  }

  return (
    <div className={darkMood ? classes.dark :''}>
      <Header darkMoodHandler={darkMoodHandler} />
      <main>
        <ScrollToTop/>
        <Switch>
          <Route path="/Home">
            <Home darkMood={darkMood} />
          </Route>
          <Route path="/services" exact>
            <Services darkMood={darkMood}/>
          </Route>
          <Route path="/services/:id">
            <ServiceDetail darkMood={darkMood}/>
          </Route>
          <Route path="/about-us">
            <AboutUs darkMood={darkMood}/>
          </Route>
          <Route path="/contact-us">
            <ContactUs darkMood={darkMood}/>
          </Route>
          <Route path="/">
            <Redirect to="/Home"/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
