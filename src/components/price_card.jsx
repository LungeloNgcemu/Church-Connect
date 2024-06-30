import React from "react";


export default function Card({ props }) {

    const outer = {

        width: "300px",
        height: "500px",
        boxShadow: "0 1px 8px grey",
        borderRadius: "20px",
        padding: "35px",
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "white",


    };



    const buttonStyle = {
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "5px", // Example border radius
        cursor: "pointer", // Change cursor on hover
    };

    const listStyle = {
        alignSelf: "flex-start", // Align the ul container's items to the start
        listStyleType: "none",
        paddingLeft: "20px",
        color: "#888",// Remove default padding
    };

    const h4 = {
        fontSize: "30px"
    }

    const markerStyle = {
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        width: "10px", // Adjust size of the marker
        height: "10px", // Adjust size of the marker
        backgroundColor: "#4169E1", // Example marker color
        borderRadius: "50%", // Rounded marker
    };

    const listItemStyle = {
        position: "relative",
        paddingLeft: "20px", // Adjust the space between the marker and text
        marginBottom: "8px", // Adjust spacing between list items
    };

    const buttonContainer = {
        width: "100%"
    };


    const { benefits } = props;
    const { kind } = props;
    const { price } = props;
    return (

        <div style={ outer }>

            <div>
                <h4>{ kind }</h4>
                <h4 style={ h4 }>{ price }</h4>
                <p style={ { color: "#888", } }>Best dollar price for all memmbers </p>
            </div>


            <div style={ buttonContainer }>

                <button style={ buttonStyle }> Pay Now</button>

                <p>Best dollar price for all memmbers, in all places </p>
            </div>


            <ul style={ listStyle }>

                { benefits.map((benefit, index) => (

                    <li key={ index } style={ listItemStyle }>

                        <span style={ markerStyle }></span> { benefit }

                    </li>
                )) }



            </ul>






        </div>

    );
}