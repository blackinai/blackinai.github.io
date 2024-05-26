import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Loader from '../../../loader';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Card, CardContent, Avatar, Link} from '@material-ui/core/';
import Typography from '../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// images 
import foutse from '../../../assets/img/team/foutse.jpg';
import salomey from '../../../assets/img/team/salomey.jpg';
import mirian from '../../../assets/img/team/mirian.jpg';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(5),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    icon: {
        alignItems: 'left',
        padding: theme.spacing(1),
        color: theme.palette.primary.dark,
    },
    card: {
        height: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
        display: 'flex',
        width:'100%',
        border: 'none',
        boxShadow: 'none',
    },
    title: {
        marginBottom: theme.spacing(0),
    },
});

const organizers = [
    {
        image: mirian,
        title: 'Mírian Silva', 
        subtitle: 'AI Engineer at IBM Research',
        bio: 'Mirian (She/Her) is an AI Research Engineer at IBM Research. She is a producer and instructor at Coursera, where she teaches Guided Projects. Currently MSc student in Computer Science at the Federal University of Minas Gerais, Brazil. She holds a BSc. in Computational Mathematics from the same university. Her research interests include broadly AI/ML, with a special focus on Privacy and Trustworthy AI.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fa", "link"]}/>,
        link_1: 'https://twitter.com/mirianfrsilva',
        link_2: 'https://mirianfsilva.github.io/'
    },
    {
        image: "",
        title: 'Lyse Naomie Wamba', 
        subtitle: '',
        bio: '',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fa", "link"]}/>,
        link_1: '',
        link_2: ''
    },
    {
        image: foutse,
        title: 'Foutse Yuehgoh', 
        subtitle: 'P.h.D Student at CNAM/ESILV & Coexel',
        bio: 'Foutse holds a BSc. degree in Mathematics and Computer Science (minor) from the University of Buea, Cameroon, and two Master\'s degrees - one in Big Data and Computer security, and the other in Information and Data processing from the African Institute for Mathematical Sciences (AIMS), Senegal and the University of Paris Saclay, France respectively. She is currently pursuing a Ph.D. in Computer Science, working on the intersection of graphs and Natural Language Processing for recommender systems.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fa", "link"]}/>,
        link_1: 'https://twitter.com/yuehgoh',
        link_2: 'https://foutse.github.io/'
    },
];

function Organizers(props) {
    const { classes } = props;

    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            {/* <WorkshopPageHeader src={image}/> */}
            <section className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" marked="center" className={classes.title}>
                                Black in AI 2024 Workshop Organizers
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            {organizers.map((tile) => (
                                <Grid key={tile} item xs md={3} align="center">
                                    <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                        {tile.title}
                                        <Link className={classes.icon} href={tile.link_1}>{tile.icon_1}</Link>
                                        <Link className={classes.icon} href={tile.link_2}>{tile.icon_2}</Link>
                                        <br/>
                                        {tile.subtitle}
                                    </Typography>
                                    {/* <Card className={classes.card}>
                                    <CardContent> */}
                                        {/* <br></br> */}
                                        {/* <Typography variant="body2" component="p">
                                            {tile.bio}
                                        </Typography> */}
                                    {/* </CardContent> */}
                                {/* </Card> */}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </section>
        <Footer />
        </ThemeProvider>
    );
}

Organizers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Organizers);
