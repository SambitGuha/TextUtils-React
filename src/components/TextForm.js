import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
   
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }
    const handleLoClick = ()=>{
   
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
   
    const handleExtraSpaces =() =>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Spaces removed", "success");
      
    }
    const [text, setText] =useState('');
  return (
    <>
    <div className="container" style ={{color :props.mode ==='light' ?'black': 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text}  onChange={handleOnChange}  id="emyBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style ={{color :props.mode ==='light' ?'black': 'white'}}>
         <h2>Your Text summary</h2>
         <p> {text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length } Minutes read</p>
         <h2>Preview</h2>
         <p>{text}</p>
    </div>
    </>
  )
}
