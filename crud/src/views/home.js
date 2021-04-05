import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AddEvent from './addEvent';
import EventList from './event';
import EventDetail from './eventDetail';

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' name='Event' component={EventList} />
                <Route exact path='/event/:id' name='EventDetail' component={EventDetail} />
                <Route exact path='/add' name='AddEvent' component={AddEvent} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

export default Home;