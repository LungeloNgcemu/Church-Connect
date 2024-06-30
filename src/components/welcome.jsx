import React from "react";
import backImage from "../assets/forback.png"

export default function Welcome() {

    const center = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    }


    const welcome = {
        padding: "30px",
        fontSize: "3rem"

    };

    const welcome_message = {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        color: "LightSlateGrey",
        padding: "20px",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        fontSize: "1.2rem",
        borderBottomLeftRadius: "20px", // Apply bottom-left radius
        borderBottomRightRadius: "20px", // Apply bottom-left radius


    };



    return (
        <div style={ center }>

            <div style={ welcome }>
                <h4> Connect your ministry to those that follow you...</h4>
            </div>
            <div style={ welcome_message }>
                <p> Come and join us at one of our Sunday services. Experience the presence of God in our times of worship and be inspired as we teach from the Bible. Services last for 1 hour and 30 minutes and there is tea and coffee served afterwards. You will be made very welcome.</p>
            </div>

        </div>
    );
}