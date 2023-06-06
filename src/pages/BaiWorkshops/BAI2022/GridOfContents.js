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
            title: 'Call For Paper & Important Deadlines',
            width: '33.3%',
            url: '/#/workshop/bai2022-cfp',
        },
        {
            title: 'Call For Reviewer/Area Chair',
            width: '33.3%',
            url: 'https://forms.gle/q1v4kqknELEXLLpr8',
        },
        {
            title: 'Black in AI Travel Grant Application',
            width: '33.3%',
            url: 'https://forms.gle/4CXkLZk89e1JvTZ66',
        },
        {
            title: 'Workshop Registration (Hybrid format)',
            width: '33.3%',
            url: 'https://forms.gle/SHdt1Bpy5aBbwpBW9',
        },
        {
            title: 'Accepted Papers',
            width: '33.3%',
            url: 'https://nbviewer.org/github/blackinai/blackinai.github.io/blob/4a3923311e72ea0613a1fcfd7472d98782787ff9/bai/src/files/BlackinAI22AcceptedPapers.pdf',
        },
        // {
        //     title: 'Accepted Papers',
        //     width: '33.3%',
        //     url: 'https://nbviewer.org/github/blackinai/blackinai.github.io/blob/main/bai/src/files/BAI2021AcceptedPapersJointPostersSession.pdf',
        // },
        {
            title: 'Workshop Program',
            width: '33.3%',
            url: 'https://nbviewer.org/github/blackinai/blackinai.github.io/blob/main/bai/src/files/BAI2022WorkshopSchedule.pdf',
        },
        // {
        //     title: 'Meet the Black in AI 2021 Organizers',
        //     width: '33.3%',
        //     url: '/#/workshop/bai2021-organizers',
        // },
    ];

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                The 6th Black in AI Workshop will be held co-located with NeurIPS 2022.
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