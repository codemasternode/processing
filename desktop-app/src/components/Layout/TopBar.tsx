import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ITopBarProps } from '../../types'

const useStyles = makeStyles(() => ({
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
        borderBottom: "1px solid lightgray"
    }
}));


const TopBar = ({ isSideBarOpen, setSideBarOpen }: ITopBarProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={() => setSideBarOpen(!isSideBarOpen)} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>
                        IT Software Company
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default TopBar