import { CardMedia, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import image from './../../assets/img/header/bai-img-7.png';


const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    background: {
        display: 'flex',
        position: 'relative',
        backgroundPosition: 'center',
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(3),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
    },
    card: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    divider: {
        size: "5px",
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
});

function MembershipHeader(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography align="left" variant="h3" marked="center" className={classes.title}>
                        Life changing connections
                        </Typography>
                    <Typography align="left" variant="h5">
                        The group was formed to create a space where Black people
                        in AI can share ideas, collaborate with one another, & discuss
                        initiatives for increasing our presence & inclusion in this
                        increasingly influential field. It’s been a very special community
                        that has been transformative for many of our members.
                        </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" height="400" width="350" image={image}
                        alt="Black people, smiling and holding the flag of Brazil">
                    </CardMedia>
                </Grid>
            </Grid>
        </Container>
    );
}

MembershipHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembershipHeader);
