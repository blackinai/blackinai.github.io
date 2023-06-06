import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import EventsBody from '../../components/EventsBody';
import ProgramsHeader from '../../components/ProgramsHeader';
import Loader from '../../loader';
import theme from './../../theme';

function Events() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <ProgramsHeader/>
            <EventsBody/>
            <Footer />
        </ThemeProvider>
    );
}

export default Events;