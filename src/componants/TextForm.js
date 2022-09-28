import React, {useState} from "react";


export default function TextForm(props) {
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLowClick = ()=>{
    let fetchText = text.toLowerCase();
    setText(fetchText);
}

const handleClearClick= ()=>{
  let newText = '';
    setText(newText);
}

const handleOnChnage =(event)=>{
    setText(event.target.value);
}

const handleCopy =()=>{
  let text = document.getElementById("floatingTextarea");
  text.select();
  // text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
}

const handleExtraSpaces =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'grey'}} onChange={handleOnChnage} rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
      <h1>Your word counter </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes taken to read word</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview it here"}</p>
      <h2>Reverse text </h2>
      <p>{text.split("").reverse().join("")}</p>
    </div>
    </>
  );
}
