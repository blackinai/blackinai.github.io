import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Loader from '../../../loader';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Card, CardContent, Avatar, Link, Divider, Button} from '@material-ui/core/';
import Typography from '../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2021.png';

// keynotes 
import louvere from './../../../assets/img/events/Louvere.jpeg';
import paul from './../../../assets/img/events/Paul.jpeg';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(15),
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
        width: theme.spacing(25),
        height: theme.spacing(25),
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
})

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

const speakers = [
    {
        image: louvere,
        name: 'Louvere Walker-Hannon',
        title: 'MathWorks Application Engineering Team Lead',
        link1: 'https://twitter.com/LWH_Bos',
        link2: 'https://www.linkedin.com/in/louvere-walker-hannon/',
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon1: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        bio: 'Louvere Walker-Hannon is a MathWorks Application Engineering Team Lead, who provides \
        technical guidance on the implementation of AI and Data Science workflows for various applications. \
        She also leads a team of other Application Engineers. She has a bachelor’s degree in Biomedical Engineering \
        and a master’s degree in Geographic Information Technology with a specialization in Remote Sensing.\
        Louvere has worked in three different engineering roles throughout her 20 plus year career while at MathWorks.\        Louvere has presented and continues to present at several STEM related conferences on various topics \
        and is an active STEM advocate. She has presented her work on Natural Language Processing and \
        presented AI workshops at various conferences. Louvere has presented her AI work at the following \
        conferences: Grace Hopper Celebration, the Women in Data Science (WiDS), the Open Data Science East \
        Conference (ODSC East), and others. Louvere is one of the Meetups Chairs for NeurIPS 2021. Louvere \
        has a long history of serving as a STEM advocate and mentor especially related to underrepresented \
        groups in technology. Louvere frequently and currently volunteers with Black Girls Code, the Society of \
        Women Engineers (SWE) African American and Latinos Affinity Groups, and the National Society of Black \
        Engineers (NSBE). She is also a recent recipient of the SWE WE Local 2022 Engaged Advocate Award \
        which honors individuals who contributed to the advancement or acceptance of women in engineering. \
        Louvere is honored to speak as a part of the Black in AI workshop for NeurIPS 2021.',
        keynoteTitle: 'What does “AI for social good” mean to the African diaspora? - Louvere Walker-Hannon',
        abstract: 'Abstract: We are aware that AI can be used for a variety of applications. The phrase AI for \
        social good has become more prominent over the past few years. But what is meant by AI for social good? \
        AI for social good is a newer research field that has an emphasis on using AI to address social, \
        environmental, and health challenges. This research is multiple disciplinary which can help provide a \
        variety of techniques and perspectives to address these challenges. On the surface, this sounds promising. \
        However, will some communities more than others have the opportunity to benefit from this research, and in \
        what ways? For instance, can AI for social good decrease trolls in social media spaces of members of the \
        African diaspora or determine trends or patterns regarding Black maternal mortality? The focus of this talk \
        will explore and try to determine what does AI for social good means specifically to members of the African \
        diaspora.',
    },
    {
        image: paul,
        name: 'Paul Azunre',
        link1: 'https://twitter.com/pazunre',
        link2: 'https://www.linkedin.com/in/paulazunre/',
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon1: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        title: 'Director of Data Science, Dun & Bradstreet. \
        Founder and Director of Research, NLP Ghana. Founder and Chief Architect, Algorine. \
        Author, "Transfer Learning for Natural Language Processing" (Manning Publications)',
        bio: 'Paul Azunre holds a PhD in Computer Science from MIT and has served as a Principal Investigator on several DARPA research programs. He founded Algorine Inc., a Research Lab dedicated to advancing AI/ML and identifying scenarios where they can have a significant social impact. Paul also co-founded Ghana NLP, an open source initiative focused on using NLP and Transfer Learning with Ghanaian and other low-resource languages. He also serves as Director of Research at Dun & Bradstreet, a company helping businesses manage supply chain risk and other business analytics challenges. He is the author of the recently published book "Transfer Learning for NLP" by Manning Publications.',
        keynoteTitle: 'NLPGhana: A Case Study on Building A Self-Sustaining Machine Learning Research Ecosystem in Africa - Paul Azunre',
        abstract: 'Abstract: Machine learning techniques for analyzing human language have traditionally focused on \
        English, other European languages, and widely-spoken Asian languages. While African languages have been getting \
        more attention recently, the same forces that led to them being ignored in the first place are being replicated \
        internally within Africa. Landmark studies in African Natural Language Processing (NLP) focus on widely spoken \
        languages like Swahili, Yoruba, Amharic, Zulu, etc. Languages with fewer speakers, such as all Ghanaian languages, \
        are relegated to the "Future Work" section and are rarely prioritized by researchers, research funding agencies, \
        or the press. I will discuss NLPGhana, an initiative I co-founded to ensure that Ghanaian languages are prioritized \
        in African NLP research. I will discuss some of our technical achievements - such as Khaya, the world\'s first and only \
        Ghanaian language neural machine translation app already being used widely by the Ghanaian public. I will discuss \
        challenges faced in trying to make this research ecosystem self-sustaining, given the aforementioned lack of \
        support for languages with fewer speakers.',
    },
]


function KeynoteSpeakers(props) {
    const { classes } = props;

    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <section className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h2" marked="center" align="center" component="h2">
                                Black in AI 2021: Invited Keynote Speakers
                            </Typography>
                        </Grid>
                        {speakers.map((tile) => (
                            <Grid item xs={12} >
                                <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                            {tile.name}
                                            <Link className={classes.icon} href={tile.link1}>{tile.icon1}</Link>
                                            <Link className={classes.icon} href={tile.link2}>{tile.icon2}</Link>
                                        </Typography>
                                        
                                        <Typography variant="body1" component="h2">
                                            {tile.title}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2" component="p">
                                            {tile.bio}
                                        </Typography>
                                        <br/>
                                        <Divider light />
                                        <br/>
                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                            {tile.keynoteTitle}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {tile.abstract}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
            <section className={classes.root}>
                <Container>
                    <ColorButton className={classes.chip} variant="contained" href="https://nbviewer.org/github/blackinai/blackinai.github.io/blob/main/bai/src/files/BAI2021WorkshopSchedule.pdf">
                        Black in AI Schedule Black in AI 2021
                    </ColorButton>
                </Container>
            </section>
            <Footer />
        </ThemeProvider>
    );
}

KeynoteSpeakers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeynoteSpeakers);