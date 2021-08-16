import { Button, CardMedia, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import image from './../../assets/img/header/bai-img-2.jpg';

// import image2 from './../../assets/img/header/bai-img-4.JPG';
// import image4 from './../../assets/img/header/bai-img-5.jpg';
// import image5 from './../../assets/img/header/bai-img-6.jpg';


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
        display: 'flex',
        direction: 'column',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
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
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
        marginTop: theme.spacing(3),
    },
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    secundary: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}))(Button);

const JoinUsButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.secondary.dark),
        backgroundColor: theme.palette.secondary.dark,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}))(Button);

function HomeHeader(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography align="left" variant="h3" className={classes.title}>
                        Increasing the presence of Black people in the field of artificial intelligence
                    </Typography>
                    <Typography align="left" variant="h5">
                        Black in AI increases the presence and inclusion of Black people in the field of
                        AI by creating space for sharing ideas, fostering collaborations, mentorship and advocacy.
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/1pv34QhQE74gBnDu2xTdLmMNnWykY5tN2wihWIh7mwrQ/viewform?edit_requested=true">
                        Become a Member
                    </ColorButton>
                    <JoinUsButton className={classes.chip} variant="contained" href="/#/partnership">
                        Partner with Us
                    </JoinUsButton>
                    <ColorButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdMcCerEXj45B_FrCrbIMhTHAO4MU5n00tl978a_bRFTfRanw/viewform">
                        Share Opportunities
                    </ColorButton>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" height="400" image={image}
                        alt="Almost ten Black people, smiling, with raised hands. All wearing the Black in AI badge.">
                    </CardMedia>
                </Grid>
            </Grid>
        </Container>
    );
}

HomeHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeHeader);
