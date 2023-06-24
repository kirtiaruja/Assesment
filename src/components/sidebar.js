import React from "react";
import "../css/menubar.css";
import { sidebar_menu } from '../components/sidebardata'
import MenuItems from "./menudataitems";

const MenuBar = () => {
    return (
        <>
            <div className="menu_wrapper">
                
                <MenuItems/>
                
            </div>
        </>
    )
}
export default MenuBar;