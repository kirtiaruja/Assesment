import React from "react";
import "../css/card.css"

const Cards = ({ title, value, icon, style }) => {
    return (<>
        <div class="box box1" style={style}>
            <div class="text" style={{marginTop:'auto'}}>
                <h2 class="topic">{title}</h2>
                <h2 class="topic-heading">{value}</h2>
            </div>
            <div className="card-icon" style={{marginBottom:'auto'}}>
                {icon}
            </div>

        </div>
    </>);
}
export default Cards;