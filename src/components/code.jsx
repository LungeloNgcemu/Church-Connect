import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import "../styles/input.css";


export default function Code() {

  
    const [otp, setOtp] = useState('');

   

    const button = {
        margin: "10px",
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED",// Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "15px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",

    };

    const digits = {

        margin : "5px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #6495ED",
        boxShadow: "0 1px 8px grey",



    }

    const navigate = useNavigate();

    function handleClick (name){

        
        navigate(name);
    };
    


    return (
        <form>

            <div style={ { display: "flex" } }> 

                <OtpInput
                    value={ otp }
                    onChange={ setOtp }
                    numInputs={ 6 }
                    separator={ <span>-</span> }
                    renderInput={(props) => <input  {...props} />}
                    inputStyle={digits}
                    shouldAutoFocus = {true}
               
                

                />

            </div>
            <br /><br />

            <button style={ button } onClick={ () => { handleClick ('account') } } type="submit" >Login</button>

        </form>
    )
}

