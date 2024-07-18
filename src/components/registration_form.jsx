import React, { useState } from 'react';
import PhoneNumber from './phone_number';
import PhoneInput from 'react-phone-number-input';
import CustomInputRegistration from './custom_input_registration';
import { useNavigate } from "react-router-dom";
import pray from "../assets/pray.jpg"

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        churchName: '',
        vision: '',
        mission: '',
        email: '',
        phoneNumber: '',
        mailingAddress: '',
        password: ''
    });

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
    };


    const formStyle = {
        color: "white",
        textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
    
        backgroundColor: "red",
        backgroundImage: `url(${pray})`,
        backgroundSize: "cover",
        padding: "30px",
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-end",
        borderRadius: "20px" // Align items to the right
    };

    const labelStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "45px",

    };

    const inputStyle = {
        marginLeft: "10px",
        width: "60%",
        height: "40px",
        fontSize: "20px",
        borderRadius: "10px",
        border: "none",
         boxShadow: "0 1px 8px grey",
    };

    const button = {
        margin: "0px",
        width: "100%", // Make button full width of parent container
        padding: "10px", // Adjust padding as needed
        backgroundColor: "#6495ED", // Example background color
        color: "white", // Example text color
        border: "none", // Remove default border
        borderRadius: "10px", // Example border radius
        cursor: "pointer", // Change cursor on hover
        boxShadow: "0 1px 8px grey",
    };


    const label = {
        fontSize: "2rem"
    }


    const nunberStyle = {
        borderRaduis: "20px",

        width: "60%"

    }

    const navigate = useNavigate();

    function handleClick (name){

        
        navigate(name);
    };


    return (

        <form style={ formStyle } onSubmit={ handleSubmit }>
            <div style={ labelStyle }>
                <label style={ label }>Full Name:</label>
                <input
                    style={ inputStyle }
                    type="text"
                    name="fullName"
                    value={ formData.fullName }
                    onChange={ handleChange }
                />
            </div>
            <div style={ labelStyle }>
                <label style={ label }>Church Name:</label>
                <input
                    style={ inputStyle }
                    type="text"
                    name="churchName"
                    value={ formData.churchName }
                    onChange={ handleChange }
                />
            </div>
            <div style={ labelStyle }>
                <label style={ label } >Vision Statement:</label>
                <textarea
                    style={ inputStyle }
                    name="vision"
                    value={ formData.vision }
                    onChange={ handleChange }
                />
            </div>
            <div style={ labelStyle }>
                <label style={ label } >Mission Statement:</label>
                <textarea
                    style={ inputStyle }
                    name="mission"
                    value={ formData.mission }
                    onChange={ handleChange }
                />
            </div>
            <div style={ labelStyle }>
                <label style={ label } >Email Address:</label>
                <input
                    style={ inputStyle }
                    type="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
                />
            </div>
            <div style={ labelStyle }>
                <label style={ label } >Phone Number:</label>
                <PhoneInput
                    style={ nunberStyle }
                    placeholder="Enter phone number"
                    value={ value }
                    onChange={ setValue }
                    inputComponent={ CustomInputRegistration }

                />
            </div>
            <div style={ labelStyle }>
                <label style={ label } >Mailing Address:</label>
                <textarea
                    style={ inputStyle }
                    name="mailingAddress"
                    value={ formData.mailingAddress }
                    onChange={ handleChange }
                />
            </div>

            <div style={ labelStyle }>
                <label style={ label }>Password:</label>
                <input
                    type="password"
                    style={ inputStyle }
                    name="password"
                    value={ formData.password }
                    onChange={ handleChange }
                />
            </div>

            <button style={ button } onClick={ () => { handleClick('code')}} type="submit">Register</button>
        </form>

    );
}

export default RegistrationForm;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   CandleSeries,
//   Category,
//   Tooltip,
//   Zoom,
//   Crosshair,
//   DateTime
// } from '@syncfusion/ej2-react-charts';

// const data = [
//   { x: new Date(2023, 0, 1), open: 120, high: 140, low: 110, close: 130 },
//   { x: new Date(2023, 0, 2), open: 130, high: 150, low: 120, close: 140 },
//   { x: new Date(2023, 0, 3), open: 140, high: 160, low: 130, close: 150 },
//   { x: new Date(2023, 0, 4), open: 150, high: 170, low: 140, close: 160 },
//   { x: new Date(2023, 0, 5), open: 160, high: 180, low: 150, close: 170 }
// ];

// export default function RegistrationForm() {
//   return (
//     <ChartComponent
//       primaryXAxis={{ valueType: 'DateTime', labelFormat: 'MMM dd' }}
//       primaryYAxis={{ title: 'Price', labelFormat: '${value}' }}
//       title="Stock Price Analysis"
//       tooltip={{ enable: true }}
//       crosshair={{ enable: true, lineType: 'Both' }}
//       zoomSettings={{ enableSelectionZooming: true, mode: 'X' }}
//     >
//       <Inject services={[CandleSeries, Category, Tooltip, Zoom, Crosshair, DateTime]} />
//       <SeriesCollectionDirective>
//         <SeriesDirective
//           dataSource={data}
//           xName='x'
//           open='open'
//           high='high'
//           low='low'
//           close='close'
//           type='Candle'
//           bearFillColor='#2ecd71'
//           bullFillColor='#e74c3d'
//           marker={{ visible: true }}
//         />
//       </SeriesCollectionDirective>
//     </ChartComponent>
//   );
// };

