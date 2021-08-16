import { Button, Container, Divider } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.main,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
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
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.light,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    divider: {
        backgroundColor: theme.palette.primary.light,
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
    secundary: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

const valueslist = [
    {
        id: 1, title: '3000+',
        text: 'We’ve grown from a small facebook group to a global movement comprising 3000 community members and allies who believe that more Black people should shape the direction of the field of AI.'
    },
    {
        id: 2, title: '42',
        text: 'Total number of countries with Black in AI members.'
    },
];

function MembershipBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                Be part of our network
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/1pv34QhQE74gBnDu2xTdLmMNnWykY5tN2wihWIh7mwrQ/viewform?edit_requested=true">
                                Become a Member
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}>
                                Career opportunities
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                Access and post job opportunities, find mentors and collaborators 
                                for your next research project and venture. We have a network of 
                                3000 members including high school, undergraduate and graduate 
                                students, engineers, professors, researchers, entrepreneurs, recruiters, artists.
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                A tight knit network
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                We have engaging discussions through our forum. Many of our 
                                initiatives started with “what if?”
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                Be part of something bigger than yourself
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                By relating and connecting with one another, we justify and 
                                normalize our presence in the field, support each other by 
                                celebrating successes as well as providing support during setbacks.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" className={classes.divider}/>
                    <Grid container spacing={5}>
                        {valueslist.map(key => (
                            <Grid item xs={12} md={6}>
                                <div className={classes.item}>
                                    {key.image}
                                    <Typography variant="h3" className={classes.title}>
                                        {key.title}
                                    </Typography>
                                    <Typography variant="body1" className={classes.title}>
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

MembershipBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembershipBody);
