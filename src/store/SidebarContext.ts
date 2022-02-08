import React from 'react';

export const defaultSidebar = true;

const SidebarContext = React.createContext({
    open: defaultSidebar,
    setOpen: (value: any) => {},
});

export default SidebarContext;
