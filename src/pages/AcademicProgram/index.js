import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/WorkshopPageHeader';
import Loader from '../../loader';
import theme from '../../theme';
import withRoot from '../../withRoot';
import image from './../../assets/img/general/academic_programs.jpg';
import ContentFile from '../../components/Markdown/readfile';
import AcademicPage from './../../posts/baiPrograms/AcademicProgram.md';

function AcademicProgram() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={AcademicPage}>
                Academic Program
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(AcademicProgram);