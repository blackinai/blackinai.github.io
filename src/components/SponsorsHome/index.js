import { Container, Link } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from './../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        justify: 'center',
    },
    image: {
        height: 80,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    avatarSize: {
        height: theme.spacing(8),
    },
});

const sponsorslist = [
        {
            title: 'Microsoft',
            image: require('./../../assets/img/sponsors-partners/microsoft.png'),
            link: 'https://www.microsoft.com/',
            alt: 'Microsoft Ruby Sponsor',
        },
        {
            title: 'Meta',
            image: require('./../../assets/img/sponsors-partners/meta.png'),
            link: 'https://www.meta.com/',
            alt: 'Meta Ruby Sponsor',
        },
        {
            title: 'Etsy',
            image: require('./../../assets/img/sponsors-partners/etsy.png'),
            link: 'https://www.meta.com/',
            alt: 'Meta Ruby Sponsor',
        },
        {
            title: 'Apple',
            image: require('./../../assets/img/sponsors-partners/apple.png'),
            link: 'https://www.apple.com/',
            alt: 'Apple Diamond Sponsor',
        },
        {
            title: 'NVIDIA',
            image: require('./../../assets/img/sponsors-partners/nvidia.png'),
            link: 'https://www.nvidia.com/en-us/',
            alt: 'NVIDIA Diamond Sponsor',
        },
        {
            title: 'Accenture',
            image: require('./../../assets/img/sponsors-partners/accenture.png'),
            link: 'https://www.accenture.com/us-en',
            alt: 'Accenture Diamond Sponsor',
        },
        {
            title: 'IBM',
            image: require('./../../assets/img/sponsors-partners/ibm.png'),
            link: 'https://www.ibm.com/',
            alt: 'IBM Platinum Sponsor'
        },
        {
            title: 'D. E. Shaw Research',
            image: require('./../../assets/img/sponsors-partners/deshaw.jpg'),
            link: 'https://www.deshaw.com/',
            alt: 'D. E. Shaw Research Platinum Sponsor',
        },
        {
            title: 'Oracle',
            image: require('./../../assets/img/sponsors-partners/oracle.png'),
            link: 'https://www.oracle.com/corporate/',
            alt: 'Oracle logo',
        },
        {
            title: 'Upstart',
            image: require('./../../assets/img/sponsors-partners/upstart.png'),
            link: 'https://www.upstart.com/',
            alt: 'Upstart Bronze Sponsor',
        }
]


function SponsorsHome(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            Current Sponsors
                        </Typography>
                    </Grid>
                    {sponsorslist.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

SponsorsHome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SponsorsHome);
