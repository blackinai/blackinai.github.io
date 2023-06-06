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
import Entrepreneurship from './../../posts/baiPrograms/EntrepreneurshipProgram.md';
import EntrepreneurshipBody from '../../components/EntrepreneurshipBody';

function EntrepreneurshipProgram() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={Entrepreneurship}>
                Entrepreneurship Program
            </ContentFile>
            <EntrepreneurshipBody></EntrepreneurshipBody>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(EntrepreneurshipProgram);