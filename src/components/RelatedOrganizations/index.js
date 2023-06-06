import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Chip, Button, Avatar, Link} from '@material-ui/core/';
import Typography from './../Typography';
import backgroundImage from './../../assets/img/appCurvyLines.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(6),
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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -160,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    avatarSize: {
        width: theme.spacing(10),
        height: theme.spacing(10),
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
}))(Button);

const OrgButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

const organizationslist = [
    {
        id: 1, title: 'Black Girls Code',
        image: 'https://pbs.twimg.com/profile_images/1233833521363509248/9CvAJslN_400x400.jpg',
        link: 'https://www.blackgirlscode.com/',
        alt: 'Black Girls Code writed inside a circle representing the organization logo',
    },
    {
        id: 2, title: 'Data Science Africa',
        image: 'https://www.datascienceafrica.org/img/logo.png',
        link: 'http://www.datascienceafrica.org/',
        alt: 'A map of the African continent representing the Data Science Africa organization logo',
    },
    {
        id: 3, title: 'Deep Learning Indaba',
        image: 'https://avatars3.githubusercontent.com/u/30663580?s=280&v=4',
        link: 'https://deeplearningindaba.com/2020/',
        alt: 'A tree representing the Deep Learning Indaba organization logo',
    },
    {
        id: 4, title: 'LatinX in AI',
        image: 'https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/mpqx1ctwlaxjhhhbmudy',
        link: 'http://www.latinxinai.org/',
        alt: 'LXAI writed inside the white circle, representing the Latin in AI organization logo',
    },
    {
        id: 5, title: 'Women in Machine Learning',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQHTNAq7y0nBOQ/company-logo_200_200/0?e=2159024400&v=beta&t=n68idCl54ApUp4E3NBQ3F2btMke4hDKjy6O1eYfrBOM',
        link: 'https://wimlworkshop.org/',
        alt: 'WiML written inside a circle, representing the Woman in Machine Learning organization logo'
    },
    {
        id: 6, title: 'Queer in AI',
        image: 'https://pbs.twimg.com/profile_images/1291532732166627328/4pMskud1.jpg',
        link: 'https://sites.google.com/view/queer-in-ai/',
        alt: 'A Black and brown brain design to represent racial diversity, also in pink, blue and white - the colors of the trans flag, in addition to the colors of the LBGT flag representing Queer in AI organization'
    }
];

function RelatedOrganizations(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Related Organizations
                        </Typography>
                    </Grid>
                    <Grid container spacing={5}>
                        <img src={backgroundImage} className={classes.curvyLines} />
                        {organizationslist.map(key => (
                            <Grid item xs={12} md={2}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <Avatar alt={key.title} src={key.image} className={classes.avatarSize} />
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

RelatedOrganizations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RelatedOrganizations);
