import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TeamMembers from '../../components/TeamMembers';
import Loader from '../../loader';
import theme from '../../theme';

function Organizers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader/>
            <Navbar />
            <TeamMembers/>
            <Footer />
        </ThemeProvider>
    );
}

export default Organizers;