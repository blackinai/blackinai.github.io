import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProgramsHeader from '../../components/ProgramsHeader';
import ProgramsList from '../../components/ProgramsList';
import Loader from '../../loader';
import theme from './../../theme';

function Programs() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <ProgramsHeader/>
            <ProgramsList/>
            <Footer />
        </ThemeProvider>
    );
}

export default Programs;