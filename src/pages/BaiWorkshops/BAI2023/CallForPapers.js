import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2023 from './../../../posts/bai2023/CallForPapers2023.md';
import Submissions2023 from './../../../posts/bai2023/Submissions2023.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2022.png';
import Loader from '../../../loader';

function CallForPapers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForPapers2023}>
                Black in AI 2023 - Call For Papers Submissions
            </ContentFile>
            <ContentFile href={Submissions2023}/>
            <Footer />/
        </ThemeProvider>
    );
}

export default withRoot(CallForPapers);