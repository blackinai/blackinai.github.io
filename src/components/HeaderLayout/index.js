import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '50vh',
            minHeight: 900,
            maxHeight: 2000,
        },
    },
    container: {
        marginTop: theme.spacing(30),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
});

function HeaderLayout(props) {
    const { backgroundClassName, children, classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                {children}
                <div className={classes.backdrop} />
                <div className={clsx(classes.background, backgroundClassName)} />
            </Container>
        </section>
    );
}

HeaderLayout.propTypes = {
    backgroundClassName: PropTypes.string.isRequired,
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderLayout);
