import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ISideBarProps } from '../../types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import { IRoutingList } from '../../types'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});



export default function SideBar({ isSideBarOpen, setSideBarOpen }: ISideBarProps) {
    const classes = useStyles();

    const [routingList, setRoutingList] = useState<IRoutingList>([
        {
            icon: <ListIcon />,
            text: "Projects",
            count: 1
        },
        {
            icon: <PersonIcon />,
            text: "Users",
            count: 5
        }
    ])

    return (
        <Drawer open={isSideBarOpen} onClose={() => setSideBarOpen(false)}>
            <List>
                {routingList.map(({ text, icon, count }, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
