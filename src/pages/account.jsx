
import React from 'react';
import AccountTops from '../components/account_tops';
import StripUpgrade from '../components/price_strip_upgrade';
import Information from '../components/information';
import backImage from "../assets/papper.png"



export default function Account() {


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
        color: "LightSlateGrey"

    }




    return (
        <>
            <AccountTops />

            <div style={ upgrade }>
              
            </div>

         <Information/>
            <StripUpgrade/>
        </>
    );
}