import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Advertising from '../../components/Advertising';
import CallForPapers from '../../components/CallForPapers';
import Footer from '../../components/Footer';
import HomeBody from '../../components/HomeBody';
import HomeHeader from '../../components/HomeHeader';
import HomeQuote from '../../components/HomeQuote';
import JoinUs from '../../components/JoinUs';
import Navbar from '../../components/Navbar';
import SponsorsHome from '../../components/SponsorsHome';
import Loader from '../../loader';
import theme from './../../theme';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar/>
            {/* Uncomment this section below to show at the top of Home page the Call For paper for Neurips 2023 */}
            <CallForPapers/> 
            <HomeHeader/>
            {/* <Advertising/> */}
            <HomeQuote/>
            <HomeBody/>
            <JoinUs/>
            {/* <SponsorsHome/> */}
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;