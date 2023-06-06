import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/WorkshopPageHeader';
import Loader from '../../loader';
import theme from '../../theme';
import image from './../../assets/img/header/bai-img-10.jpg';
import ContentFile from './../../components/Markdown/readfile';
import PressRoomMD from './../../posts/Media/PressRoom.md';
import BAIOpenPositionMD from './../../posts/Media/BAI0penPosition.md';

function PressRoom() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={PressRoomMD}>
                Press Room
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

function BAIOpenPosition() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={BAIOpenPositionMD}>
                Black in AI is looking for its first Executive Director
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default {PressRoom, BAIOpenPosition};