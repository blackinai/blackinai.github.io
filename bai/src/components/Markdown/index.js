import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
});

const options = {
    overrides: {
        h1: {
            component: (props) => <Typography gutterBottom variant="h4" {...props} />,
        },
        h2: {
            component: (props) => <Typography gutterBottom variant="h6" {...props} />,
        },
        h3: {
            component: (props) => (
                <Typography gutterBottom variant="subtitle1" {...props} />
            ),
        },
        h4: {
            component: (props) => {
                return (
                    <Typography gutterBottom variant="caption" paragraph {...props} />
                );
            },
        },
        p: {
            component: (props) => <Typography paragraph {...props} />,
        },
        a: { component: Link },
        li: {
            component: withStyles(styles)((props) => {
                const { classes, ...other } = props;
                return (
                    <li className={classes.listItem}>
                        <Typography component="span" {...other} />
                    </li>
                );
            }),
        },
    },
};

function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;
