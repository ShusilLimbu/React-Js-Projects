import React, { useState } from 'react';

const Main=()=>{
    let [text,setText]=useState();
    let [words,setNoOfWords]=useState();
    let textGetter=(e)=>{
        setText(e.target.value);
        console.log(text);
    };
    let convertToUpperCase=()=>{
        let upperText=text.toUpperCase();
        setText(upperText);
    };
    let countWords=()=>{
        let numberOfWords=text.split(' ').length;
        setNoOfWords(numberOfWords);
    };
   return(
    <div className="containner-main">
        <h3>Type text here:</h3>
        <textarea onChange={textGetter} value={text}></textarea>
        <div className="wrap-button">
        <button onClick={convertToUpperCase}>UpperCase</button>
        <button onClick={countWords} value={words}>Count Words</button><input type="text" value={words}></input>
        </div>
        <p>Time to read : {0.005*words} minutes</p>
    </div>
)
};
export default Main;