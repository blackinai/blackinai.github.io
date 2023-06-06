import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Button } from '@material-ui/core/';
import Typography from './../Typography';
import backgroundImage from './../../assets/img/appCurvyLines.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
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
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -150,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    divider: {
        backgroundColor: theme.palette.primary.dark,
        margin: theme.spacing(2, 2),
        width:"140vh",
        height: "1px",
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
}))(Button);


const valueslist = [
    {
        id: 1, title: '2017',
        text: 'Black in AI was founded to challenge the status quo.'
    },
    {
        id: 2, title: '3000',
        text: 'We’ve grown from a small facebook group to a global movement comprising 3000 community members & allies who believe that more Black people should shape the direction of the field of AI.'
    },
    {
        id: 3, title: '10+',
        text: 'Number of workshops held or some other metric that shows how far we’ve come.'
    },
    {
        id: 4, title: '40x',
        text: 'We have increased the number of Black people participating in major AI conferences globally by orders of magnitude through advocacy, financial aid and our workshop.'
    },
];

function CommunityValues(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid container spacing={3}>
                        <img src={backgroundImage} alt="" className={classes.curvyLines} />
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                We're addressing the diversity crisis in AI
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="/#/programs">
                                Our Programs
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}>
                                Representation Matters
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                While artificial intelligence (AI) has the potential to solve 
                                an incredible spectrum of problems and challenges in our lives, 
                                our work and our world, there is a widening disconnect between 
                                the people who are introducing and deploying AI-based solutions 
                                and those who set policies for when and how these solutions are used.
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                Missed Opportunities
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                Much has been written about one consequence of this disconnect—algorithmic
                                bias in AI systems, in which machine learning algorithms trained on data 
                                that reflects historical discrimination replicate and even magnify it. 
                                But there’s another pressing issue: There are many missed opportunities 
                                to use AI for the good of many.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" className={classes.divider}/>
                    <Grid container spacing={5}>
                        {valueslist.map(key => (
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    {key.image}
                                    <Typography variant="h3" className={classes.title}>
                                        {key.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {key.text}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

CommunityValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityValues);
