import { useContext } from 'react';
import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { ContactsContext, SidebarContext } from '@/store';

function Header() {
    const { setOpen } = useContext(SidebarContext);
    const { contacts } = useContext(ContactsContext);

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen((prev) => !prev)}
                    edge="start"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>

                <div>Generated contacts: {contacts.length}</div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
