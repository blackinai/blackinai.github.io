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
    duolingoAvatarSize: {
        height: theme.spacing(12),
    },
});
// Ruby -> Diamond -> Platinum -> Gold -> Silver -> Bronze -> Thank You

const sponsorslist = [
        {
            title: 'Apple',
            image: require('./../../assets/img/sponsors-partners/apple.png'),
            link: 'https://www.apple.com/',
            alt: 'Apple Gold Sponsor',
        },
        {
            title: 'IBM',
            image: require('./../../assets/img/sponsors-partners/ibm.png'),
            link: 'https://research.ibm.com/',
            alt: 'IBM Gold Sponsor'
        },
        {
            title: 'D.E.Shaw & Co Group',
            image: require('./../../assets/img/sponsors-partners/deshaw_group.png'),
            link: 'https://www.deshaw.com/',
            alt: 'D.E.Shaw & Co Gold Sponsor',
        },
        {
            title: "Duolingo",
            image: require('./../../assets/img/sponsors-partners/duolingo.png'),
            link: "https://www.duolingo.com/",
            alt: "Duolingo Bronze Sponsor"
        },
        {
            title: "MathWorks",
            image: require('./../../assets/img/sponsors-partners/mathworks.png'),
            link: "https://www.duolingo.com/",
            alt: "MathWorks Bronze Sponsor"
        },
        {
            title: "Vector Institute",
            image: require('./../../assets/img/sponsors-partners/vectorInstitute.png'),
            link: "https://vectorinstitute.ai/",
            alt: "Vector Institute Silver Sponsor"
        }
]

const fundersList = [
    {
        title: 'Rockefeller Foundation',
        image: require('./../../assets/img/funders/rockefeller.png'),
        link: 'https://www.rockefellerfoundation.org/',
        alt: 'BAI Funder Rockefeller Foundation',
    },
    {
        title: 'MacArthur Foundation',
        image: require('./../../assets/img/funders/macarthur.png'),
        link: 'https://www.macfound.org/',
        alt: 'BAI Funder MacArthur Foundation',
    },
    {
        title: 'Patrick J McGovern Foudnation',
        image: require('./../../assets/img/funders/pmjf.png'),
        link: 'https://www.mcgovern.org/',
        alt: 'BAI Funder Patrick J McGovern Foudnation',
    },
    {
        title: 'Ford Foundation',
        image: require('./../../assets/img/funders/fordfoundation.jpeg'),
        link: 'https://www.fordfoundation.org/',
        alt: 'BAI Funder Ford Foundation',
    },
    {
        title: 'Sloan Foundation',
        image: require('./../../assets/img/funders/alfredSloan.png'),
        link: 'https://sloan.org/',
        alt: 'BAI Funder Sloan Foundation',
    },
    {
        title: 'Etsy',
        image: require('./../../assets/img/funders/etsy.png'),
        link: 'https://www.etsy.com/',
        alt: 'BAI Funder Etsy',
    },
    {
        title: 'GSK',
        image: require('./../../assets/img/funders/gsk.png'),
        link: 'https://www.gsk.com/',
        alt: 'BAI Funder GSK',
    },
    {
        title: 'Microsoft',
        image: require('./../../assets/img/funders/microsoft.png'),
        link: 'https://www.microsoft.com/en-us/research/',
        alt: 'BAI Funder Microsoft',
    },
]


function SponsorsHome(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    {/* <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            2023 Current Sponsors
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
                    ))} */}
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                            <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                                Black in AI Funders
                            </Typography>
                        </Grid>
                        {fundersList.map(key => (
                            <Grid item xs align="center">
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

SponsorsHome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SponsorsHome);
