import { Box, Container, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useMarked } from 'use-marked-hook';
import Typography from '../../components/Typography';
import theme from '../../theme';
import withRoot from '../../withRoot';

function ContentFile(props) {
    const path_md = props.href;
    
    const [content, setContent] = useState("");
    
    const html = {
        __html: useMarked(content, { skipSanitize: true } )
    };

    const getMarkdown = () => {
        fetch(path_md)
          .then(res => res.text())
          .then(setContent);
    };

    useEffect(() => {
        getMarkdown();
    });

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box mt={8} mb={12}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.children}
                    </Typography>
                    <Typography variant="body1">
                        <div dangerouslySetInnerHTML={html}/>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default withRoot(ContentFile);