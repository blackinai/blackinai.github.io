import React from 'react';
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

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(2),
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
});

const teamlist = [
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Retina_AI.png?raw=true',
        title: 'Retina AI', 
        founder: 'Stephen Odaibo',
        bio: 'Our products diagnose disease from pictures of the retina',
        link: 'https://www.retinahealth.ai/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Lisnen.jpg?raw=true',
        title: 'Lisnen', 
        founder: 'Eyra Abraham',
        bio: 'Lisnen is a situational awareness app designed to assist hearing loss individuals with sensing essential sounds around them.',
        link: 'https://lisnen.com/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/BlackUp.png?raw=true',
        title: 'BlackUp', 
        founder: 'Christabel Agbonkonkon',
        bio: 'We make it easy for companies to find and hire Black talents, onboard and manage their experiences.',
        link: '', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Salynt.png?raw=true',
        title: 'Salynt', 
        founder: 'Jeremy Lawson',
        bio: 'No-code data science platform.',
        link: 'https://www.salynt.io/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Suacode.jpg?raw=true',
        title: 'SuaCode.ai', 
        founder: 'George Boateng',
        bio: 'We enable young Africans to learn code using smartphones and AI.',
        link: 'https://suacode.ai/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/460a09e4d407620e3eb0e962348dfdd291b551da/BAI%20Startup%20Showcase/Ubenwa.png?raw=true',
        title: 'Ubenwa', 
        founder: 'Charles Onu',
        bio: 'Cry-based pathology detection in infants using AI.',
        link: 'https://ubenwa.ai/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Medium%20Biosciences.png?raw=true',
        title: 'Medium Biosciences', 
        founder: 'Hassan Kane, Adil Yusuf',
        bio: 'ML to rapidly find novel, high performing enzymes.',
        link: 'http://medium.bio/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Haiphen_AI.png?raw=true',
        title: 'Haiphen', 
        founder: 'Jude Safo',
        bio: 'API management tools to make secure, traceable software practically accessible to everyone.',
        link: 'https://www.haiphenai.com/', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/HANSU.jpeg?raw=true',
        title: 'Hansu', 
        founder: 'Nazirini Siraji',
        bio: 'Actionable intelligence for smallholder farmers in Uganda.',
        link: '', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
    {
        image: 'https://github.com/blackinai/website-assets/blob/main/BAI%20Startup%20Showcase/Lesan%20AI%20logo.png?raw=true',
        title: 'Lesan AI', 
        founder: 'Asmelash Teka',
        bio: 'Machine translation systems centered on African languages, starting with Ethiopia (Tigrinya & Amharic).',
        link: 'https://lesan.ai/about.html', 
        icon: <FontAwesomeIcon icon={["fa", "link"]}/>,
    },
];

const reviewers = {
    title: 'Review Committee',
    names: 'Fadjiah Collin, John Pasmore, Hassan Kane, Michael Harries, Abdelhak Mahmoudi, Chinasa Okolo, Zuby Onwuta, Darrius Grant, Esube Bekele',
}

function StartupsShowcase(props) {
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
                            <Typography variant="h3" marked="center" align="center" component="h2">
                                Startup Showcase - Accepted Companies 
                            </Typography>
                        </Grid>
                        {teamlist.map((tile) => (
                            <Grid item xs={12} md={4}>
                                <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                            {tile.title}
                                        <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                                        </Typography>
                                        <Typography variant="body1" component="h2">
                                            Founder: {tile.founder}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2" component="p">
                                            {tile.bio}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Typography variant='h4'>
                                {reviewers.title}
                            </Typography>
                            <br/>
                            <Typography variant='body'>
                                {reviewers.names}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant='h4'>
                                Watch the Startup Showcase at NeurIPS 2021
                            </Typography>
                            <iframe src="https://slideslive.com/embed/presentation/38973431" width="100%" height="400" 
                                allow="autoplay; fullscreen" 
                                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" 
                                frameborder="0" scrolling="no">    
                            </iframe>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </ThemeProvider>
    );
}

StartupsShowcase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartupsShowcase);
