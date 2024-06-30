import React, { useState } from 'react';
import PhoneNumber from './phone_number';
import { useNavigate } from "react-router-dom";

export default function MyForm() {

    //Map input
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setInputs(prev => ({ ...prev, [name]: value }))

        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
    }


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

    const [value, setValue] = useState('');



    const navigate = useNavigate();

    function handleClick (name){
        navigate(name);
    };

  


    return (
        <form onSubmit={ handleSubmit }>

            <div style={ { display: "flex"} }><label style={{paddingRight : "20px", fontSize : "16px"}}></label>

                <PhoneNumber value={value} setValue={setValue}/>
                
            </div>
            <br /><br />

            <button style={button} onClick={ () => { handleClick('code')}} type="submit" >Login</button>
            
        </form>
    )
}


// import React, { useState } from 'react';
// import CountryCode from './country_code';
// import PhoneNumber from './phone_number';

// export default function MyForm() {

//     //Map input
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {

//         const name = event.target.name;
//         const value = event.target.value;

//         setInputs(prev => ({ ...prev, [name]: value }))
//     }


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//     }


//     const list = { codes: ["+27", "+34"] };

//     return (
//         <form onSubmit={ handleSubmit }>

//             <div style={ { display: "flex" } }><label style={{paddingRight : "20px"}}>Phone Number   </label>

//                 <PhoneNumber/>
                
//             </div>
//             <br /><br />
//             <input type="submit" />
//             <br /><br />


//             <label>Enter your name:  </label>
//             <input
//                 type="text"
//                 name="username"
//                 value={ inputs.username || "" }
//                 onChange={ handleChange }
//             />

//             <br /><br />




//             <label>Enter your age:    </label>
//             <input
//                 type="number"
//                 name="age"
//                 value={ inputs.age || "" }
//                 onChange={ handleChange }
//             />


//             <br /><br />

//             <input type="submit" />
//         </form>
//     )
// }
