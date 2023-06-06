import { Container } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = (theme) => ({
    root: {
        flexGrow: 1
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        position: 'relative',
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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.light,
    },
    cardMedia: {
        height: 300,
        backgroundImage: 'url(image)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: theme.palette.common.white,
    },
});

function WorkshopPageHeader(props) {
    const { classes } = props;
    const path_img = props.src;

    return (
        <div className={classes.root}>
            <Container className={classes.cardMedia} style={{ backgroundImage: `url(${path_img})` }}>    
                {<img style={{ display: 'none' }} alt="" src={path_img} />}
            </Container>
        </div>

    );
}

WorkshopPageHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkshopPageHeader);
