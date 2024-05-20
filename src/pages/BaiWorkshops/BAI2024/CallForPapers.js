import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2024 from './../../../posts/bai2024/CallForPapers2024.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2024.png';
import Loader from '../../../loader';
import Organizers from './Organizers';

function CallForPapers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForPapers2024}>
                Black in AI 2024 - Call For Papers
            </ContentFile>
            <Organizers />
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(CallForPapers);