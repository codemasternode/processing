import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { IDashboard } from '../types'
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    root: {
        marginLeft: 280,
        marginTop: 64,
        flexGrow: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50
    },
    root2: {
        paddingLeft: 60,
        paddingRight: 60
    },
    createProjectButton: {
        background: "#6200EE",
        color: "white",
        width: "max-content",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "13px",
        lineHeight: "14px",
        fontWeight: "bold",
        letterSpacing: "1.25px",
        textTransform: "uppercase"
    },
    subHeader: {
        lineHeight: "16px",
        letterSpacing: "1.5px",
        paddingLeft: 16,
        color: "rgba(0,0,0,0.6)",
        marginTop: 100
    },
    companyNameText: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.5px",
        color: "#000000 60%"
    },
    companyInfoText: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.4px",
        color: "rgba(0,0,0,0.38)"
    },
    project: {
        borderBottom: "1px solid rgba(0,0,0,0.2)",
        paddingTop: 10,
        paddingBottom: 10
    }
})

const projects = [
    {
        name: "Calclogistisc App - application for calculating transport costs",
        users: [
            {
                name: "Martin",
                lastname: "XD",
                image: null
            },
            {
                name: "Stefan",
                lastname: "XD",
                image: null
            },
            {
                name: "Luther",
                lastname: "XD",
                image: null
            }
        ],
        endpoints: []
    },
    {
        name: "Courier App",
        users: [
            {
                name: "Martin",
                lastname: "XD",
                image: null
            },
            {
                name: "Stefan",
                lastname: "XD",
                image: null
            }
        ],
        endpoints: []
    },
    {
        name: "TG Core - panel management",
        users: [
            {
                name: "Luther",
                lastname: "XD",
                image: null
            }
        ],
        endpoints: []
    }
]

const Dashboard = ({ socket }: IDashboard) => {
    const classes = styles()
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (!socket) return;
    }, [socket])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <Button variant="contained" className={classes.createProjectButton}>+ Create New Project</Button>
                </Grid>
            </Grid>
            <Grid container>
                <p className={classes.subHeader}>Projects</p>
            </Grid>
            <div className={classes.root2}>
                <Grid container>
                    <Grid item xs={12}>
                        {
                            projects.map((project) => (
                                <Grid container className={classes.project}>
                                    <Grid item xs={8}>
                                        <h1 className={classes.companyNameText}>{project.name}</h1>
                                        <p className={classes.companyInfoText}>{project.endpoints.length} endpoints, {project.users.length} users</p>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard