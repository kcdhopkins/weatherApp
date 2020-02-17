import React from "react";

function Header(props){
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "80vw",
        backgroundColor: "blue",
        marginBottom: "10px",
        padding: "5px"
    }
    return (<div style={headerStyle}>
                <span>Current Forecast</span>
                <span>Slidell, LA</span>
            </div>);
}

export default Header;