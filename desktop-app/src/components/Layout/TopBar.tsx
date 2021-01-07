import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuIcon: {
        width: "3rem",
        height: "3rem"
    },
    title: {
        flexGrow: 1,
        fontSize: "2.2rem",
        lineHeight: "2.2rem",
        fontWeight: 700,
        marginLeft: "2rem"
    },
    appBar: {
        background: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid lightgray",
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
    }
}));


const TopBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: true,
            })}>
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        IT Software Company
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default TopBar