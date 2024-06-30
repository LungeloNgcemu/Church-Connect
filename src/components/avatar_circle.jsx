import React from 'react';


export default function Avatar() {



    const outer = {
        backgroundColor: "#6495ED",
        height: "130px",
        width: "130px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const inner = {

        backgroundColor: "blue",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
        overflow: " hidden"
    }

    const image = {

        height: "100%",
        width: "100%",
        objectFit: "cover",

    }

    const column = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }


    return (

        <>
            <div style={ column }>

                <div>

                    <div style={ outer }>

                        <div style={ inner }>  <img style={ image } src='https://th.bing.com/th/id/OIP.-NZJZ6pFqwfS2yCgbwRZugAAAA?rs=1&pid=ImgDetMain' /> </div>


                    </div>

                    

                </div>



                <h4 style={ { margin: "0px" } }>Michel Smith</h4>
            </div>

        </>
    );
}