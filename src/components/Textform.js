import React,{useState} from 'react'



export default function Textform(props){
    const [text,setText] = useState("Enter text here...");
   
    const handleUpClick=()=>{
        console.log("clicked",text)
        let t = text.toUpperCase();
        setText(t);
    }
    const handleDownClick=()=>{
        console.log("clicked",text)
        let t = text.toLowerCase();
        setText(t);
    }
    const handleOnChange=(e)=>{
        console.log("onchange")
        setText(e.target.value)
    }
    return (  <>
                <div className="container" >
                <h1> {props.heading}</h1>
                <div className="mb-3">

                    <textarea
                    className="form-control"
                    id="myBox"
                    rows={10}
                    //defaultValue={""}
                    onChange={handleOnChange}
                    value={text}
                    />
               </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
                 <span>   </span>
                <button className="btn btn-primary" onClick={handleDownClick}>Lowercase</button>

                </div>
                <div className="container my-3">
                    <h2>Your text summary :</h2>
                    <p>your text have {text.trim().split(/\s+/).length} words {text.length} characters</p>
                </div>
                </>
            )
}