import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/WorkshopPageHeader';
import Loader from '../../loader';
import theme from '../../theme';
import withRoot from '../../withRoot';
import image from './../../assets/img/general/young-black-women-talking.jpg';
import ContentFile from './../../components/Markdown/readfile';
import SummerResearchProgram from './../../posts/baiPrograms/SummerResearchPrograms.md';

function SummerResearchPrograms() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image} />
            <ContentFile href={SummerResearchProgram}>
                Summer Research Programs
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(SummerResearchPrograms);