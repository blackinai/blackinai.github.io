import { Button, Container, Divider, Link } from '@material-ui/core/';
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
        size: 'medium',
        borderRadius: "40px",
    },
    divider: {
        backgroundColor: theme.palette.secondary.light,
        margin: theme.spacing(2, 2),
        flexItem: true,
        height: "1px",
    },
    secondDivider: {
        backgroundColor: theme.palette.secondary,
        margin: theme.spacing(2, 2),
        flexItem: true,
        height: "1px",
    },
    list: {
        margin: theme.spacing(3),
        color: theme.palette.primary.light,
    },
    listButton: {
        margin: theme.spacing(-1),
        size: 'small',
        borderRadius: "40px",
        marginLeft: theme.spacing(25),
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

const SecondButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

function EventsBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" color="secondary" className={classes.title}>
                            Conferences & Workshops
                            <Divider variant="middle" className={classes.divider}/>
                        </Typography>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.title}>
                                Our annual Black in AI (BAI) workshop co-located with NeurIPS, as well as our 
                                satellite gatherings in other AI conferences (e.g. AAAI, CVPR, ICML, FAccT) allow 
                                members of the Black in AI community to attend NeurIPS without feeling isolated.
                            </Typography>
                            <SecondButton className={classes.chip} variant="contained" href="/">
                                Become a Sponsor
                            </SecondButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" className={classes.list}>
                                Black in AI 2022
                                <ColorButton className={classes.chip} variant="contained" href="/#/workshop/bai2022">VIEW Black in AI 2022</ColorButton>
                            </Typography>
                            <Typography variant="body1" className={classes.list}>
                                Black in AI 2021
                                <SecondButton className={classes.chip} variant="contained" href="/#/workshop/bai2021">VIEW Black in AI 2021</SecondButton>
                            </Typography>
                            <Divider variant="middle" className={classes.secondDivider}/>
                            <Typography variant="body1" className={classes.list}>
                                Black in AI 2020
                                <SecondButton className={classes.chip} variant="contained" href="https://blackinai2020.vercel.app/">VIEW HIGHLIGHTS</SecondButton>
                            </Typography>
                            <Divider variant="middle" className={classes.secondDivider}/>
                            <Typography variant="body1" className={classes.list}>
                                <Link className={classes.chip} variant="contained" href="/#conferences">View more conferences</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" color="secondary" className={classes.title}>
                            Black in AI Socials
                            <Divider variant="middle" className={classes.divider}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" className={classes.list}>
                            Black in AI Social @ ICML 2022 (Soon)
                            <SecondButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdy4Y8R-nHGWLpehh7AQx_1VpuDyb9OfjlQyOOrF8mccp-vnA/viewform">VIEW EVENT</SecondButton>
                        </Typography>
                        <Divider variant="middle" className={classes.secondDivider}/>
                        <Typography variant="body1" className={classes.list}>
                            Black in AI Social @ ICML 2021 (Past)
                            <SecondButton className={classes.chip} variant="contained" href="/#/social-icml-2021">VIEW EVENT</SecondButton>
                        </Typography>
                        <Divider variant="middle" className={classes.secondDivider}/>
                        <Typography variant="body1" className={classes.list}>
                            Black in AI Social @ NAACL 2021 (Past)
                            <SecondButton className={classes.chip} variant="contained" href="/#/social-naacl-2021">VIEW EVENT</SecondButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

EventsBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsBody);
