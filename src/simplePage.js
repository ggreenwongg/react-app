import React, { useState, useEffect } from 'react';

function SimplePage() {
    const [color, setColor] = useState("#f0f0f0")
    const [font, setFont] = useState("#000000")

    function changeColor() {
        const colour = Math.floor(Math.random() * 999999)
        setColor("#" + colour)
    }
    function getRandomNum() {
        const randomNum = Math.floor(Math.random() * (256))
        return randomNum;

    }
    function changeFontColor() {
        const rgbColor = Math.floor(Math.random() * 256)
        const randomFontColor = (`rgb(`+ getRandomNum() + "," + getRandomNum() + "," + getRandomNum() + `)`)
        setFont(randomFontColor)
        return randomFontColor
    }
    useEffect(() => {
        changeFontColor();
    },[color])

    return (
        <div className="boarder">
            <div className="head" style={{ background: color }}>
                <h1 style={{ color: font }}>A Simple Page</h1>
            </div>
            <button onClick={changeColor}>Change Colour</button>
            <button onClick={changeFontColor}>Change Font Colour</button>
            <p>Title Color : {color}</p>
            <p>Font  Color :{font}</p>

            <br></br>
            <div className="content">
            <h2>Content</h2>
            <img src={require("./pikachu.jpg")} alt="pikachu" />
            </div>
            <br></br><br></br>
            <div className="footer" onClick={changeFontColor}>
            <p>My 1st React App </p>
            </div>
        </div>

    )
}
export default SimplePage;
