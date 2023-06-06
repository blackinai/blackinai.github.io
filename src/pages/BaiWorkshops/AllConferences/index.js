import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Navbar from '../../../components/Navbar';
import Workshops from '../../../components/Workshops';
import Loader from '../../../loader';
import withRoot from '../../../withRoot';
import theme from './../../../theme';

function Conferences() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar/>
            <Workshops/>
        </ThemeProvider>
    );
}

export default withRoot(Conferences);