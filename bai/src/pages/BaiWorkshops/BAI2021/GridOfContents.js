import { ButtonBase, Container } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../../components/Typography';

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

function GridOfContents(props) {
    const { classes } = props;

    const workshops = [
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Workshop Eventbrite Registration',
            width: '33.3%',
            url: 'https://blackinai-workshop2021.eventbrite.com.br',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Call For Paper Submissions',
            width: '33.3%',
            url: '/#/workshop/bai2021-cfp',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Call For Startups',
            width: '33.3%',
            url: '/#/workshop/bai2021-call-for-startups',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Call For Reviewer/Area Chair',
            width: '33.3%',
            url: 'https://forms.gle/XCqfvms9QuF1RqNS8',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Call For Volunteers',
            width: '33.3%',
            url: 'https://forms.gle/TUwckbnmXU64oaH49',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Financial Assistance Application',
            width: '33.3%',
            url: 'https://neurips.cc/Surveys/61',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Meet the BAI 2021 Organizers',
            width: '49.9%',
            url: '/#/workshop/bai2021-organizers',
        },
        {
            img: require('./../../../assets/img/general/blackinai2021.png'),
            title: 'Workshop Schedule - Coming Soon',
            width: '50%',
            url: '/',
        },
    ];

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                The 5th Black in AI Workshop will be held virtually (co-located with NeurIPS 2021) on December 10th.
                The workshop will feature invited talks from prominent researchers and practitioners, a poster session and a startups showcase. 
                We invite all members of the AI community to attend the workshop.
            </Typography>
            <div className={classes.images}>
                {workshops.map((key) => (
                    <ButtonBase key={key.title} href={key.url} className={classes.imageWrapper} style={{ width: key.width,}}>
                        <div className={classes.imageSrc} style={{ backgroundImage: `url(${key.img})`}} />
                        <div className={classes.imageBackdrop} />
                        <div className={classes.imageButton} >
                            <Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle} >
                                {key.title}
                                <div className={classes.imageMarked} />
                            </Typography>
                        </div>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}

GridOfContents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridOfContents);