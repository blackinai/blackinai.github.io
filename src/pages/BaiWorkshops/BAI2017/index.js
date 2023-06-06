import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../../components/Footer';
import ContentFile from '../../../components/Markdown/readfile';
import Navbar from '../../../components/Navbar';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import Loader from '../../../loader';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import image from './../../../assets/img/general/renaissance_long_beach_hotel.jpg';
import CallForPapers2017 from './../../../posts/bai2017/CallForPapers2017.md';
import Grants2017 from './../../../posts/bai2017/Grants2017.md';
import Organizers2017 from './../../../posts/bai2017/Organizers2017.md';
import Programs2017 from './../../../posts/bai2017/Programs2017.md';
import Sponsors2017 from './../../../posts/bai2017/Sponsors2017.md';
import Submissions2017 from './../../../posts/bai2017/Submissions2017.md';

function BAI2017() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForPapers2017}>
                Black in AI 2017
            </ContentFile>
            <ContentFile href={Submissions2017}/>
            <ContentFile href={Grants2017}/>
            <ContentFile href={Programs2017}/>
            <ContentFile href={Organizers2017}/>
            <ContentFile href={Sponsors2017}/>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2017);