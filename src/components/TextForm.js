import React,{useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleupclick = ()=>{ 
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
    document.title = "Textutils - uppercase";
  }
  const handledownclick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
    document.title = "Textutils - lowercase";
  }
  const handleclearclick = ()=>{ 
    setText("");
    props.showAlert("Cleared Text","success");
    document.title = "Textutils - cleartext";
  }
  const handleonChange = (event)=>{ //This function is require because we have to change variable text value by onchange method
    setText(event.target.value);
  }

  const handlecopyclick = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
    document.title = "Textutils - Copied";
  }

  const handlespaceclick = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces","success");
    document.title = "Textutils - removespaces";
  }

  const[text,setText] = useState('');
  //text = "new text"; //Wrong way to change the state
  //setText("new text"); //Correct way to change the state
  return (
    <>
      <div className="mb-3" style={{color: props.mode === `dark`?`pink`:`black`, border: `1px solid ${props.mode === `dark`?`white`:`black`}` }}> 
      {/* Here we have create 2 curly bracket...2nd one is for javascript object */}
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox" placeholder="Enter Text Here"
          rows="3" value={text} onChange={handleonChange}
          style={{backgroundColor: props.mode === `dark`?`grey`:`white`,color:props.mode === `dark`?`white`:`black`}}>
          </textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleupclick}>Convert To UpeerCase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handledownclick}>Convert To LowerCase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleclearclick}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handlecopyclick}>Copy Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handlespaceclick}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === `dark`?`white`:`black`}}>
        <h1>Text Summary: </h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter any text for preview your content"}</p>
      </div>
      </>
  );
}

TextForm.prototypes = {
    heading : PropTypes.String
};
