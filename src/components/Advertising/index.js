import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button} from '@material-ui/core/';
import Typography from '../Typography';
import icmllogo from './../../assets/img/general/icml_logo.png';

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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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

function Advertising(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                    <img src={icmllogo} className={classes.curvyLines} alt=""/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                <Typography variant="h2" className={classes.title}>
                                    Black in AI + Queer in AI Social at ICML 2022
                                </Typography>
                                </div>
                            </Grid>
                    </Grid> 
                    
                    <Typography variant="body1" className={classes.title}>
                        Event dates: ICML: July 17 to 23 2022 Baltimore Maryland United States
                        <hr></hr>
                        Black in AI + Queer in AI Social at ICML 2022: Wednesday July 20th 2022 Baltimore Convention Centre
                        {/* <a href="/#/conferences" target="_blank"> Check out more information about submissions and important dates.</a> */}
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdy4Y8R-nHGWLpehh7AQx_1VpuDyb9OfjlQyOOrF8mccp-vnA/viewform">
                        Event Sign-In
                    </ColorButton>
                    <br/>
                    <Typography variant="body2">
                        <br/>
                        *To attend the workshop you must be registered for the main conference. 
                        <br/>
                    </Typography>
                </Grid>
            </Container>
        </section>

    );
}

Advertising.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Advertising);
