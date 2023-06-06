import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SponsorshipBody from '../../components/SponsorshipBody';
import SponsorshipHeader from '../../components/SponsorshipHeader';
import Sponsors from '../../components/Sponsors';
import Loader from '../../loader';
import theme from '../../theme';

function Sponsorship() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <SponsorshipHeader/>
            <SponsorshipBody/>
            <Sponsors/>
            <Footer />
        </ThemeProvider>
    );
}

export default Sponsorship;