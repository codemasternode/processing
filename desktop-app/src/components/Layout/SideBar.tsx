import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { ISideBarProps } from '../../types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import { IRoutingList } from '../../types'
import { withRouter } from 'react-router-dom';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    list: {
        width: "270px",
    },
    listItem: {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,

        '&:hover': {
            cursor: "pointer"
        }
    },
    listItemText: {
        fontWeight: 700,
        fontSize: "1.4rem",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    signedListItem: {
        background: "rgba(98, 0, 238, 0.1)"
    },
    signedListItemText: {
        color: '#6200EE !important'
    },
    fullList: {
        width: 'auto',
    },
    listItemIcon: {
        minWidth: 0,
        marginRight: 20
    },
    subHeader: {
        lineHeight: "16px",
        letterSpacing: "1.5px",
        paddingLeft: 16
    },
    icon: {
        width: 25,
        height: 25
    }
}));

const colors = [
    "#FF8C00",
    "#8DCD03",
    "#333333",
    "#9B51E0",
    "#219653",
    "#EB5757"
]



function SideBar({ match: { url }, image, name, lastname, projects }: ISideBarProps) {
    const classes = useStyles();

    const [routingList, setRoutingList] = useState<IRoutingList>([
        {
            icon: <ListIcon className={classes.icon} />,
            text: "Projects",
            route: "/",
            count: 1
        },
        {
            icon: <PersonIcon className={classes.icon} />,
            text: "Users",
            route: "/users",
            count: 5
        }
    ])

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                open={true}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            {
                                image ?
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> :
                                    <Avatar>{name.substring(0, 1).toUpperCase()}</Avatar>
                            }
                        </ListItemAvatar>
                        <p className={classes.listItemText}>{name} {lastname}</p>
                    </ListItem>
                </List>

                <List className={classes.list}>
                    {routingList.map(({ text, icon, count, route }) => (
                        <ListItem key={text} className={clsx({
                            [classes.listItem]: true,
                            [classes.signedListItem]: url === route
                        })}>
                            <ListItemIcon className={clsx({
                                [classes.signedListItemText]: url === route
                            })}>
                                {icon}
                            </ListItemIcon>
                            <p className={clsx({
                                [classes.listItemText]: true,
                                [classes.signedListItemText]: url === route
                            })}>{text}</p>
                            <ListItemSecondaryAction>
                                <p className={clsx({
                                    [classes.listItemText]: true,
                                    [classes.signedListItemText]: url === route
                                })}>{count}</p>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>

                <p
                    className={classes.subHeader}
                >Your projects</p>

                <List>
                    {
                        projects.map(({ name }, index) => (
                            <ListItem>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.63 0.84C14.27 0.33 13.67 0 13 0L2 0.0100002C0.9 0.0100002 0 0.9 0 2V12C0 13.1 0.9 13.99 2 13.99L13 14C13.67 14 14.27 13.67 14.63 13.16L19 7L14.63 0.84Z"
                                            fill={colors[index % colors.length]} />
                                    </svg>
                                </ListItemIcon>
                                <p className={classes.listItemText}>{name}</p>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </>
    );
}


export default withRouter(SideBar)