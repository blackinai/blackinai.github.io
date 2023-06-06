import { Container } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
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
        marginTop: theme.spacing(3),    },
});

function MembershipDirectory(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" marked="center" className={classes.title}>
                            Membership Directory
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* eslint-disable-next-line */}
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2TdfZ8yuIko0S4LRu0YV6QXP22oBmvGpbfLLojFOVhsoJ-9ZM-xPGSZUtORIS_yGWcxVKnzQv-Qsq/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                            width="100%" height="500px">
                        </iframe>
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

MembershipDirectory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembershipDirectory);
