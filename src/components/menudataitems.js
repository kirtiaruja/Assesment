import React from "react";
import "../css/menuItems.css"
import { sidebar_menu } from "./sidebardata";


const MenuItems = () => {
    return (
        <>
            <div className="menu_items">
                <div className="menu_title">
                    <label>Board.</label>
                </div>
                <ul>
                    {sidebar_menu.map((val) => {
                        return (
                            <li onClick={() => window.location.pathname = val.link}>
                                <div className="icon">{val.icon}</div>{" "}
                                <div className="items_title">{val.title}</div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </>
    );
}
export default MenuItems;