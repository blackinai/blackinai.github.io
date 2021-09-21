import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button} from '@material-ui/core/';
import Typography from '../Typography';
import neuripslogo from './../../assets/img/general/neuripslogo.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(7),
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 60,
    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.dark,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    curvyLines: {
        height: 200,
        top: 0,
    },
    alert:{
        color: theme.palette.error.main,
    }
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
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}))(Button);

function CallForPapers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                    <img src={neuripslogo} className={classes.curvyLines} alt=""/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                <Typography variant="h2" className={classes.title}>
                                    Black in AI Workshop 2021
                                    Call for Papers
                                </Typography>
                                </div>
                            </Grid>
                    </Grid> 
                    
                    <Typography variant="body1" className={classes.title}>
                        Black researchers in AI, ML and related application areas (health, agriculture, politics, economics, law etc.) 
                        are welcome to submit their work.

                        The 5th Black in AI Workshop will be held virtually (co-located with NeurIPS 2021). 
                        We encourage individuals from Black, African, and Diasporic communities to join us and submit their work.
                        <b> Call for Paper Submission Opens on CMT: September 23, 2021. </b> 
                        <a href="/#/conferences" target="_blank"> Check out more information about submissions and important dates.</a>

                        {/* <b className={classes.alert}> Submission deadline has NOW PASSED! </b>  */}
                        {/* <b> Authors of accepted papers will be notified after November 6th 2020.</b> */}
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="/#/workshop/bai2021">
                        Call For Submissions
                    </ColorButton>
                    {/* <ColorButton className={classes.chip} variant="contained" href="/talks2020">
                        BAI 2020 Invited Talks
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="/schedule2020">
                        BAI NeurIPS 2020 Schedule
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="/datagrant2020">
                        NeurIPS Registration Assistance and Data Grants
                    </ColorButton> */}
                </Grid>
            </Container>
        </section>

    );
}

CallForPapers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallForPapers);
