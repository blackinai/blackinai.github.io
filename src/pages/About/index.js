import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import AboutHeader from '../../components/AboutHeader';
import CommunityValues from '../../components/CommunityValues';
import Footer from '../../components/Footer';
import JoinUs from '../../components/JoinUs';
import Navbar from '../../components/Navbar';
import TeamMembers from '../../components/TeamMembers';
import Loader from '../../loader';
import theme from './../../theme';

function About() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar />
            <AboutHeader />
            <CommunityValues />
            <TeamMembers />
            <JoinUs />
            <Footer />
        </ThemeProvider>
    );
}
export default About;