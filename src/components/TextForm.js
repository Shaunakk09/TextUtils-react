import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
      console.log("upper case was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case","success");

  }
  const handleLowClick = ()=>{
    console.log("upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");

}

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
}
  const handleBold = ()=>{
    console.log("Bold was clicked");
    let Boldtext = `<div style="color:red">${text}</div>`
    console.log(Boldtext)
    setText(Boldtext);
  }

  const [text,setText] = useState('');
  return (
      <>
            <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
              <div className="mb-3">
              <h1 style={{marginTop: "80px"}}>{props.heading}</h1>
              </div>
              <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} ></textarea>
              </div>
                  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
                  <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lower Case</button>
                  <button className='btn btn-primary mx-2' onClick={handleBold}>Convert to Bold</button>
            </div>
            <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
    </>
  )
}
