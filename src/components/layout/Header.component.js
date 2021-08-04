import React from "react";
import {Link} from "react-router-dom";

function Header() {
    const headerStyle = {
        background: 'teal',
        color: "#fff",
        textAlign: "center",
        padding: 20,
        boxShadow: "1px 4px 8px #5f8f88",
        marginBottom: "25px",
        wordSpacing: "1ch",
        letterSpacing: ".5ch",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#fff"
    };
    return(
        <header style={headerStyle}>
            <h1 style={{marginBottom: 12, color: "#000"}}>SIMPLE REACT TODO LIST</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

export default Header;