import React, { ReactChild, useState } from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

const Layout = ({ children }: { children: ReactChild }) => {

    const [isSideBarOpen, setSideBarOpen] = useState(true)

    return (
        <>
            <TopBar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} />
            <SideBar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} />
            {children}
        </>
    )
}

export default Layout