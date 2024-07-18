import React from "react";
import Card from "./price_card";
import backImage from "../assets/pray.jpg"

export default function StripUpgrade() {


    const container = {
        display: "flex",
        padding: "30px",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "20px",

    }

    const basic = {
        kind: "Basic",
        price: "Free",
        benefits: ["20 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
    }
    const advanced = {
        kind: "Advanced",
        price: "$50 per month",
        benefits: ["70 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"],
    }
    const premium = {
        kind: "Premium",
        price: "$150 per month",
        benefits: ["200 Users", "Unlimited Chat", "Unlimited Post", "Push Notification"]
    }

    const upgrade = {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        margin: "0px",
        width: "100%",
        height: "120px",
        backgroundColor: "blue",
        display : "flex",
        justifyContent: "center",
        fontSize: "2rem",
        color: "white",
        textShadow: "2px 4px 3px grey",
        borderRadius: "20px",

    }


    return (

        <div >


            <div style={ upgrade }>
                <h3>Upgrade Plan</h3>
            </div>


            <div style={ container }>
                <Card props={ advanced } />
                <Card props={ premium } />
            </div>

        </div>



    );
}