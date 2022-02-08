import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import SidebarContext from '@/store/SidebarContext';
import ContactForm from './ContactForm';

export const drawerWidth = 240;

function Index() {
    const { open } = useContext(SidebarContext);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 'inherit',
                    boxSizing: 'border-box',
                    p: 2,
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <ContactForm />
        </Drawer>
    )
}

export default Index;
