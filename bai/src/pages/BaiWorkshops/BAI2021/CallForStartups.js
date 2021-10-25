import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForStartups2021 from './../../../posts/bai2021/CallForStartups2021.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2021.png';
import Loader from '../../../loader';

function BAI2021() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForStartups2021}>
                Black in AI 2021 - Call For Startups
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2021);