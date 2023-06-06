import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/WorkshopPageHeader';
import Loader from '../../loader';
import theme from '../../theme';
import withRoot from '../../withRoot';
import image from './../../assets/img/general/image2.jpg';
import ContentFile from './../../components/Markdown/readfile';
import FinancialSupportProgram from './../../posts/baiPrograms/FinancialSupport.md';

function FinancialSupport() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={FinancialSupportProgram}>
                Financial Support
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(FinancialSupport);