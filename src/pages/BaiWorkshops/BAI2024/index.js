import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import GridOfContents from './GridOfContents';
import image from './../../../assets/img/general/header-bai-2024.png';
import Loader from '../../../loader';
import SponsorsHome from '../../../components/SponsorsHome';

function BAI2024() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <GridOfContents/>
            {/* <SponsorsHome/> */}
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2024);