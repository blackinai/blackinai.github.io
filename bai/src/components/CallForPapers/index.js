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
                        The 5th Black in AI Workshop will be held virtually (co-located with NeurIPS 2021) on December 10th.
                        The workshop will feature invited talks from prominent researchers and practitioners and a poster session. 
                        We invite all members of the AI community to attend the workshop. Registration for the Workshop 
                        <a href="https://blackinai-workshop2021.eventbrite.com.br" target="_blank" rel="noopener noreferrer">HERE.</a>
                        <br/>

                        Black researchers in AI, ML and related application areas (health, agriculture, politics, economics, law etc.) 
                        are welcome to submit their work. We encourage individuals from Black, African, and Diasporic communities to join us and submit their work.
                        
                        <br/>
                        <b> <s>Call for Paper Submission Deadline on October 22 , 2021, 11:59 PM UTC</s></b> 
                        <br/>
                        <font color="red">  
                            <b>Paper Submission Deadline EXTENDED to October 29 , 2021, 11:59 PM UTC </b>
                        </font>
                        <br/>
                        <a href="/#/conferences" target="_blank"> Check out more information about submissions and important dates.</a>
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="/#/workshop/bai2021/">
                        Full Details
                    </ColorButton>
                </Grid>
            </Container>
        </section>

    );
}

CallForPapers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallForPapers);
