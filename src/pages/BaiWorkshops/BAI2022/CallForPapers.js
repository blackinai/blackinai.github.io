import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2022 from './../../../posts/bai2022/CallForPapers2022.md';
import Submissions2022 from './../../../posts/bai2022/Submissions2022.md';
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
            <ContentFile href={CallForPapers2022}>
                Black in AI 2022 - Call For Papers Submissions
            </ContentFile>
            <ContentFile href={Submissions2022}/>
            <Footer />/
        </ThemeProvider>
    );
}

export default withRoot(CallForPapers);