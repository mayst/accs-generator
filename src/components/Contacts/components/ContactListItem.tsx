import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import Contact from '@/models/IContact';
import map from 'lodash/map';

function ContactListItem(props: { contact: Contact, onClick: () => any }) {
    const { contact: { avatar, nickname, email, lastName, firstName } } = props;
    const contactMapper = {
        'Email': email,
        'First Name': firstName,
        'Last Name': lastName,
    };

    return (
        <ListItem
            disablePadding
            onClick={props.onClick}
        >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        alt="items avatar"
                        src={avatar}
                    />
                </ListItemAvatar>

                <ListItemText
                    primary={nickname}
                    secondary={
                        map(contactMapper, (value, title) => (
                            <React.Fragment key={title}>
                                <span style={{ display: 'block' }}>
                                    {`${title}: `}
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {value}
                                    </Typography>
                                </span>
                            </React.Fragment>
                        ))
                    }
                />
            </ListItemButton>
        </ListItem>
    );
}

export default ContactListItem;
