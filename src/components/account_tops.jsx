import React from "react";
import backImage from "../assets/pray.jpg"
import Avatar from "./avatar_circle";

export default function AccountTops() {

    const center = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    }


    const welcome = {
        padding: "10px",
        fontSize: "2.9rem",
        textShadow: "2px 4px 3px grey",


    };

    const welcome_message = {

        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "1.2rem",
        borderBottomLeftRadius: "20px", // Apply bottom-left radius
        borderBottomRightRadius: "20px", // Apply bottom-left radius
        height: " 150px",
        width: "98%",
        display: "flex",


    };

    const churchName = {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        paddingRight: "200px",
        fontSize: "1.8rem",
        textShadow: "2px 4px 3px grey",
    }

    const info = {
        display: "flex",
        width: "20%",
        textShadow: "2px 4px 3px grey",

    }



    return (
        <div style={ center }>


            <div style={ welcome_message }>

                <div style={ info }>
                    <Avatar />
                </div>


                <div style={ churchName }>
                    <h1>Baptist Church International</h1>

                </div>




            </div>

            {/* <div style={ welcome }>
                <h4> Welcome Back</h4>
            </div> */}

        </div>
    );
}