import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2021 from './../../../posts/bai2021/CallForPapers2021.md';
import Submissions2021 from './../../../posts/bai2021/Submissions2021.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2021.png';
import Loader from '../../../loader';

function CallForPapers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForPapers2021}>
                Black in AI 2021 - Call For Papers Submissions
            </ContentFile>
            <ContentFile href={Submissions2021}/>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(CallForPapers);