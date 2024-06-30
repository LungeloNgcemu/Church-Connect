import React from "react";
import Card from "./price_card";

export default function Strip() {


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
        benefits : ["20 Users","Unlimited Chat","Unlimited Post","Push Notification"],
    }
    const advanced = {
        kind: "Advanced",
        price: "$50 per month",
        benefits : ["70 Users","Unlimited Chat","Unlimited Post","Push Notification"],
    }
    const premium = {
    kind: "Premium",
        price: "$150 per month",
        benefits : ["200 Users","Unlimited Chat","Unlimited Post","Push Notification"]
    }


    return (

        <div style={ container }>
            <Card props = {basic} />
            <Card props = {advanced}/>
            <Card props = {premium}/>
        </div>

    );
}