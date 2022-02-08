import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import SidebarContext from '@/store/SidebarContext';
import ContactForm from './ContactForm';

export const drawerWidth = 240;
export const xsDrawerWidth = 150;

const styles = (theme) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 'inherit',
        boxSizing: 'border-box',
        padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
        width: xsDrawerWidth,
    },
});

function Sidebar() {
    const { open } = useContext(SidebarContext);

    return (
        <Drawer
            sx={styles}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <ContactForm />
        </Drawer>
    );
}

export default Sidebar;
