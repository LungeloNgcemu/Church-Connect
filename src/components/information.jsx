import React from 'react';
import back from '../assets/worship.jpg'


export default function Information() {


    const container = {

        // backgroundImage: `url(${back})`,
        borderRadius: "20px",
        margin: "10px",
        height: "550px",
        width: "100%",
        // boxShadow: "0 1px 8px grey",
        marginBottom: "50px",


    }

    const formLay = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"

    }


    const controlContainer = {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "60px",
        paddingBottom: "60px",

    }


    const overlayContentStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 1px 8px grey",
        margin: "10px"
    };

    const buttonStyleL = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#556B2F", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", 
     
    };

    const buttonStyleR = {
        margin: "10px",

        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", 
        // Change cursor on hover
    };

    
    const info = {

        fontSize: "1.4rem",
        fontWeight: "bold"
    }


    return (
        <>

            <div style={ controlContainer }>

              







                        <div style={ overlayContentStyle }>
                            <h1 style={ { margin: "0px" } }>Church Connect Information</h1>

                            <p style={ info }>Subscription Plan : Basic</p>
                            <p style={ info }>Current Church Members : 500</p>
                            <p style={ info }>Church password : 154545454545</p>
                           

                            <div style={ { display: "flex", flexDirection: "column" } }>

                                <div style={ { display: "flex", justifyContent: "space-between" } }>

                                    <button style={ buttonStyleL }  > Update Plan</button>

                                </div>
                            </div>
                        </div>

                        <div style={ overlayContentStyle }>
                            <h1 style={ { margin: "0px" } }>Payment Connect Information</h1>

                            <p style={ info }>Subscription Plan : Basic</p>
                            <p style={ info }>Last Payment Date : 1 April 2024</p>
                            <p style={ info }>Payment Due Date: 30 April 2024</p>
                           

                            <div style={ { display: "flex", flexDirection: "column" } }>

                                <div style={ { display: "flex", justifyContent: "space-between" } }>

                                    <button style={ buttonStyleR }  > Make Paymnet</button>

                                </div>
                            </div>
                        </div>

            </div>

        </>
    );
}