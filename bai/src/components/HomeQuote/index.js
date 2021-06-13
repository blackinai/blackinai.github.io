import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button, Avatar } from '@material-ui/core/';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.main,
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
    },
    image: {
        height: 60,
    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.light,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'medium',
        borderRadius: "40px",
        marginBottom: theme.spacing(2),
    },
    avatarSize: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        marginTop: theme.spacing(-5)
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
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

function HomeQuote(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h3" align="center" className={classes.title}>
                            Removing barriers to the sustained existence of black ai innovators
                        </Typography>
                    
                        <Typography variant="body1" className={classes.title}>
                            Without diversity in our set of researchers, we are not going to address problems
                            faced by the majority of people in the world. Black in AI’s projects addresses the
                            dire lack of Black professionals in the field of artificial intelligence (AI), and
                            the lack of visibility and support for those who are already in the field, leading
                            them to leave or not realize their full potential.
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/#/about">
                            Learn more about our work
                        </ColorButton>
                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                        <Avatar alt="Timnit Gebru" src={require('./../../assets/img/team/TimnitGebru.jpg')}
                            className={classes.avatarSize} />
                        <Typography className={classes.title} variant="body1" gutterBottom>
                            Timnit Gebru
                            <br></br>
                            Co-founder, Black in AI
                        </Typography>
                    </Grid> */}
               
            </Container>
        </section>

    );
}

HomeQuote.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeQuote);
