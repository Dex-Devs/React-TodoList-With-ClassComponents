import React from 'react'

const aboutContainerStyle = {
    fontStyle: "oblique",
    textAlign: "center",
    fontSize: "1.5rem",
    width: "50%",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "25%"
}
export default function About() {
    return  <React.Fragment>
                <div style={aboutContainerStyle}    className="about-container">
                    <p>This is a ToDo app made by Dexter Reyes</p>
                </div>
            </React.Fragment>
}


