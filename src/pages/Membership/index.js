import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import MembershipBody from '../../components/MembershipBody';
import MembershipDirectory from '../../components/MembershipDirectory';
import MembershipHeader from '../../components/MembershipHeader';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';
import theme from './../../theme';

function Membership() {
    return (
        <ThemeProvider theme={theme}>
            <Loader/>
            <Navbar />
            <MembershipHeader/>
            <MembershipBody/>
            {/* <MembershipDirectory/> */}
            <Footer />
        </ThemeProvider>
    );
}

export default Membership;