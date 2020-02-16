import React from "react";
import Clear from "./assets/images/Clear.png";
import Clouds from "./assets/images/Clouds.png";
import Rain from "./assets/images/Rain.png";


function WeatherBody(props){
    const weatherBodyStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ADD8E6",
    }

    const imgStyle = {
        maxWidth: "150px",
        maxHeight: "150px"
    }

    const spanSizeStyle = {
        fontSize: "45px"
    }

    const spanStyle = {
        alignSelf: "center"
    }

    const weather = props.wObj.weather[0].main;
    const now = props.wObj.main.temp;
    const high = props.wObj.main.temp_max;
    const low = props.wObj.main.temp_min;
    return(
            <div id="weatherBody" style ={weatherBodyStyle}>
                <span style={spanStyle}><img id ="sun" src={ weather === 'Clear' ? Clear : weather === 'Clouds' ? Clouds : Rain} style={imgStyle}></img></span>
                <span style ={spanSizeStyle}>Now: {now}</span>
                <span style ={spanSizeStyle}>High: {high}</span>
                <span style ={spanSizeStyle}>Low: {low}</span>
            </div>
    );
}

export default WeatherBody;