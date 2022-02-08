import React, { useContext } from 'react';
import { Box } from '@mui/material';
import './styles.css';
import { Header, Contacts } from '@/components';
import { SidebarContext } from '@/store';

function Content() {
    const { open } = useContext(SidebarContext);

    return (
        <Box className={`app__content app__content--${open ? 'open' : ''}`}>
            <Header />

            <Contacts />
        </Box>
    );
}

export default Content;
