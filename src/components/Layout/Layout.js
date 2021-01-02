import React from "react"
import classes from "./Layout.module.css"
import Ax from "../../hoc/Ax"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

const layout = (props)=>(
        <Ax>    
            <Toolbar/>
            <SideDrawer/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Ax>
)

export default layout