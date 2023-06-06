import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from './../../../components/Footer';
import Navbar from './../../../components/Navbar';
import PageHeader from './../../../components/WorkshopPageHeader';
import Loader from './../../../loader';
import theme from './../../../theme';
import withRoot from './../../../withRoot';
import image from './../../../assets/img/general/vienna.jpeg';
import ContentFile from './../../../components/Markdown/readfile';
import BaiSocial from './../../../posts/baiEvents/ICML2021.md';

function ICML2021() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={BaiSocial}>
                Black in AI Social @ ICML 2021
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(ICML2021);