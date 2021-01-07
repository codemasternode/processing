import React, { ReactChild, useState } from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

const projects = [
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    },
    {
        name: "Calclogistisc App - application for calculating transport costs"
    }
]

const Layout = ({ children }: { children: ReactChild }) => {
    return (
        <>
            <TopBar />
            <SideBar name="Marcin" lastname="Warzybok" projects={projects} />
            {children}
        </>
    )
}

export default Layout