import React from "react";
import wallpaper from "./wallpapper.png";
import NavBar from "./navbar";
import phone from "../assets/phone.png"
import { useNavigate } from "react-router-dom";

export default function Head() {

   
    const navigate = useNavigate();

    function handleClick (name){
        navigate(name);
    };
   


    const layout = {
        backgroundColor: "blue",
        height: "75vh",
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",  // Ensure the image covers the div
        backgroundPosition: "center",
        borderBottomRightRadius: "120px"
    };



    const imgStyle = {
        width: "220px", // Adjust width as needed
        height: "auto", // Maintain aspect ratio
        position: "relative",
        left: "200px",
        marginRight: "100px" // Position relative to parent
        // Adjust distance from bottom

        // Ensure image is above the overlay
    };

    const info = {

        fontSize: "1.4rem",
        fontWeight: "bold"
    }



    const buttonStyleL = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const buttonStyleR = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#556B2F", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };
    const buttonStyleD = {
        margin: "10px",

        width: "97%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "black", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const overlayContentStyle = {
       backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "20px",
        borderRadius: "20px"
    };


    return (
        <div style={ layout }>
            <NavBar />


            <div style={ { display: "flex", justifyContent: "space-around" } } >
                <img src={ phone } alt="Phone" style={ imgStyle } />

                <div style={overlayContentStyle }>
                    <h1 style={ { margin: "0px" } }>Experience the power of fellowship</h1>

                    <p style={ info }>Church Event Calender</p>
                    <p style={ info }>Social Media post</p>
                    <p style={ info }>Church Chat</p>
                    <p style={ info }>YouTube Streaming</p>
                    <p style={ info }>Soo much more...</p>

                    <div style={ { display: "flex", flexDirection: "column" } }>

                        <div style={ { display: "flex", justifyContent: "space-between" } }>

                            <button style={ buttonStyleR } onClick={  () =>{ handleClick("register")}}>Register Ministry</button>
                            <button style={ buttonStyleL } onClick={  () =>{ handleClick("login")}} > Login to Ministry</button>

                        </div>
                        <button style={ buttonStyleD }> Download Mobile App</button>
                    </div>
                </div>
            </div>
        </div>
    );

}