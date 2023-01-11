import React from "react";

function CardB({image, name, role}){
    return (
        <div className="card">
        <img src=/*"https://img.icons8.com/dusk/64/000000/guest-male.png"*/{image} alt="avatar" className="image"/>
        <div className="container">
            <h4><b>{name}</b></h4>
            <p>{role}</p>
        </div>
    </div>
    )
}

export default CardB