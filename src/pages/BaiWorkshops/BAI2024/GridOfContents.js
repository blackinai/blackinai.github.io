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
        height: '25vh',
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
        color: theme.palette.common.black,
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
            title: 'Call For Paper (OPEN) & Important Deadlines',
            width: '33.3%',
            url: '/#/workshop/bai2024-cfp',
        },
        {
            title: 'Call For Reviewer/Area Chair (SOON)',
            width: '33.3%',
            URL: '',
            // url: 'https://forms.gle/Um2oimLaGkcwwaV4A',
        },
        {
            // title: 'Black in AI Travel Grant Application',
            // width: '33.3%',
            // url: 'https://forms.gle/4CXkLZk89e1JvTZ66',
        },
        {
            title: 'Workshop Registration (SOON)',
            width: '33.3%',
            url: '',
        },
        {
            title: 'Accepted Papers (SOON)',
            width: '33.3%',
            url: '',
        },
        {
            title: 'Workshop Program (SOON)',
            width: '33.3%',
            url: '',
        },
        {
            title: 'Black in AI 2024 Organizers',
            width: '33.3%',
            url: '/#/workshop/bai2024-cfp',
        },
    ];

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                The 8th Black in AI Workshop will be held co-located with NeurIPS 2024.
                The workshop will feature invited talks from prominent researchers and practitioners, 
                a poster session and a startups showcase. We invite all members of the AI community 
                to attend the workshop.
            </Typography>
            <div className={classes.images}>
                {workshops.map((key) => (
                    <ButtonBase key={key.title} href={key.url} className={classes.imageWrapper} style={{ width: key.width,}}>
                        <div className={classes.imageButton} >
                            <Typography component="h3" variant="h6" color="black" className={classes.imageTitle} >
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
