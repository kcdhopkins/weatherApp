import React from "react";
import WeatherBody from "./weatherbody";

function WeatherData(props){

    const weatherContainerStyle = {
        display: "flex",
        flexDirection: "row",
        width: "80.6vw"
    }

    const anotherStyle = {
        display: "flex",
        flexDirection: "row",
        flexBasis: "100%",
        justifyContent: "space-between"
    }

    const weatherHeaderStyle = {
        display: "flex",
        flexDirection: "column"
    }

    const dayStyle = {
        backgroundColor: "blue",
        textAlign: "center"
    }

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const templateMaker = (obj, index) => {
        let dt = new Date(1970, 0, 1);
        dt.setSeconds(obj.dt);
        const day = dt.getDay();
        return (
            <div key={index} style={weatherHeaderStyle}>
                <span style={dayStyle}>{days[day - 1]}</span>
                <WeatherBody wObj = {obj}/>
            </div>
        );
    }

    const template = props.weatherInfo.map( templateMaker );
   
    return(
        <div style={weatherContainerStyle}>
            <div style={anotherStyle}>
                {template}
            </div>
        </div>);
}

export default WeatherData;