import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button } from '@material-ui/core/';
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
    alert: {
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
                        <br />
                        <br />
                        <Grid item xs={12} md={5}>
                            <div className={classes.item}>
                                <img src={neuripslogo} className={classes.curvyLines} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={classes.item}>
                                <Typography variant="h2" className={classes.title}>
                                    Black in AI Workshop 2022
                                    Call for Papers
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" className={classes.title}>
                        The 6th Black in AI Workshop will be held co-located with NeurIPS 2022.

                        We are looking forward to papers in the area of AI, including but not limited to computer
                        vision, deep learning, knowledge reasoning, machine learning, multi-agent systems, natural
                        language processing, statistical reasoning, theory, robotics, as well as applications of AI
                        in other areas such as health and education, and submissions on fairness, ethics, and transparency
                        in AI. Submissions may present new theories, methods, or applications.

                        We encourage all Black researchers in fields related to AI to submit their work. The paper should
                        involve at least one Black researcher as either a lead or co-author.

                        {/* The workshop will feature invited talks from prominent researchers and practitioners and a poster session. 
                        We invite all members of the AI community to attend the workshop. Registration for the Workshop: 
                        <a href="https://blackinai-workshop2021.eventbrite.com.br" target="_blank" rel="noopener noreferrer">HERE.</a>
                        <br/>

                        Black researchers in AI, ML and related application areas (health, agriculture, politics, economics, law etc.) 
                        are welcome to submit their work. We encourage individuals from Black, African, and Diasporic communities to join us and submit their work.
                        
                        <a href="/#/conferences" target="_blank"> Check out more information about submissions and important dates.</a> */}
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="/#/workshop/bai2023/">
                        Full Details
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="https://forms.gle/SHdt1Bpy5aBbwpBW9">
                        Workshop Registration
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="https://nbviewer.org/github/blackinai/blackinai.github.io/blob/4a3923311e72ea0613a1fcfd7472d98782787ff9/bai/src/files/BlackinAI22AcceptedPapers.pdf">
                        BAI 2022 Accepted Papers
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="https://nbviewer.org/github/blackinai/blackinai.github.io/blob/main/bai/src/files/BAI2022WorkshopSchedule.pdf">
                        Workshop Program
                    </ColorButton>
                    {/* 
                    <ColorButton className={classes.chip} variant="contained" href="https://nbviewer.org/github/blackinai/blackinai.github.io/blob/main/bai/src/files/BAI2021AcceptedPapersJointPostersSession.pdf">
                        Accepted Papers Black in AI 2021
                    </ColorButton> */}
                    <br />
                    <Typography variant="body2">
                        <br />
                        *To attend the workshop you must be registered for the main conference!
                        We strongly encourage workshop attendees to register for the main conference as early
                        as possible.
                    </Typography>
                </Grid>
            </Container>
        </section>

    );
}

CallForPapers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallForPapers);
