import { Container, Card, CardContent, Avatar, Link, Divider} from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(2),
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
        padding: theme.spacing(0, 2),
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
    divider: {
        backgroundColor: theme.palette.secondary.dark,
        margin: theme.spacing(2, 2),
        width: "140vh",
        height: "1px",
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


const valueslist = [
    {
        id: 1,
        title: '140+ companies',
        title_2: '50 verticals',
        text: 'Today, Black in AI founders have launched more than 140 companies applying AI across 50 verticals.'
    },
    {
        id: 2,
        title: '1500 jobs',
        title_2: '$428 milion',
        text: 'Along the way, these Black In AI founders have created more than 1,500 jobs and have collectively raised at least $428 million.'
    },
];


const entrepreneur_team = [
    {
        image: require('./../../assets/img/team/HassanKane.jpg'),
        title: 'Mohamed Hassan Kane', 
        subtitle: 'Director, Entrepreneurship Program',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        link: 'https://www.linkedin.com/in/mohamed-hassan-kane-4b50328a/',    
    },
    {
        image: require('./../../assets/img/team/NielsRochet.png'),
        title: 'Niels Rochet', 
        subtitle: 'Program Manager, Entrepreneurship Program',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        link: 'https://www.linkedin.com/in/niels-rochet-8b5752146/',    
    }
]

function EntrepreneurshipBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    {/* <Divider variant="middle" className={classes.divider}/> */}
                    <Grid container spacing={5}>
                        {valueslist.map(key => (
                            <Grid item xs={12} md={6}>
                                <div className={classes.item}>
                                    {key.image}
                                    <Typography variant="h4" className={classes.title}>
                                        {key.title}
                                    </Typography>
                                    <Typography variant="h4" className={classes.title}>
                                        {key.title_2}
                                    </Typography>
                                    <Typography variant="body1" className={classes.title}>
                                        {key.text}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="body1" className={classes.title}>
                        Drawing from the results of our surveys and most recent research, our work moving forward will be focused on two axes: providing funding to early stage teams and pairing our founders with experienced mentors.
                        <br /><br />
                        Please stay tuned for more as we work on developing our program to tackle  these challenges and contact us if you are interested in partnering with us.
                        <br /><br />
                        Additional Resources:
                        In December 2021, we hosted our first ever startup <Link variant="body1" color="inherit" underline="always" href="https://blackinai.github.io/#/workshop/bai2021-call-for-startups"> showcase </Link>
                        as part of the 2021 Black In AI workshop.

                        <br /><br />
                        If you want to partner or learn more, reach out to <b>entrepreneurship@blackinai.org</b>
                    </Typography>
                    <Divider variant="middle" className={classes.divider}/>
                    <Typography variant="h6" marked="center" align="center" className={classes.title}>
                        Entrepreneurship Team:
                    </Typography>
                    <br/><br/>
                    <Grid container justify="center">
                        {entrepreneur_team.map((tile) => (
                            <Grid item xs md={4} align="center">
                                <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                            {tile.title}
                                            <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                                        </Typography>
                                        <Typography variant="body1" component="h2">
                                            {tile.subtitle}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2" component="p">
                                            {tile.bio}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

EntrepreneurshipBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EntrepreneurshipBody);
