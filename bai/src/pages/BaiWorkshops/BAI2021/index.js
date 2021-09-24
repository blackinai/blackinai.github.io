import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForSubmissions2021 from './../../../posts/bai2021/CallForSubmissions.md';
// import Grants2019 from './../../../posts/bai2019/Grants2019.md';
// import Organizers2019 from './../../../posts/bai2019/Organizers2019.md';
// import Submissions2019 from './../../../posts/bai2019/Submissions2019.md';
// import Programs2019 from './../../../posts/bai2019/Programs2019.md';
// import Sponsors2019 from './../../../posts/bai2019/Sponsors2019.md';
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
            <ContentFile href={CallForSubmissions2021}>
                Black in AI 2021
            </ContentFile>
            {/* <ContentFile href={Submissions2021}/> */}
            {/* <ContentFile href={Grants2019}/> */}
            {/* <ContentFile href={Programs2019}/> */}
            {/* <ContentFile href={Organizers2019}/> */}
            {/* <ContentFile href={Sponsors2019}/> */}
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2021);