import React from 'react';
import Navigation from './comps/assets/Navbar/Navigation';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*import AboutMe from './comps/pages/AboutMe';
import Resumes from './comps/pages/Resumes';
import ContactMe from './comps/pages/ContactMe';
import Hero from './comps/pages/Hero';
import Footer from './comps/Footer';*/
import './App.css';
import AboutMe from './comps/pages/AboutMe/AboutMe';
import Dashboard from './comps/pages/Dashboard/Dashboard';
import Project from './comps/pages/Projects/Project';
import MyResume from './comps/pages/MyResume';
import ContactMe from './comps/pages/Contact/ContactMe';
import Footer from './comps/pages/Footer/Footer';



function App(){
    return(
        <>
        <Router>
            <Navigation />
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/AboutMe' component={AboutMe}/>
                <Route path='/Projects' component= {Project}/>
                <Route path='/MyResume' component= {MyResume}/>
                <Route path='/Contact' component= {ContactMe}/>
            </Switch>
            <Footer/>
        </Router>
        </>
    );
}

export default App;