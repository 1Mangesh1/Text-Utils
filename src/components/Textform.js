import React,{useState} from 'react'



export default function Textform(props){
    const [text,setText] = useState("");
   
    const handleCapClick=()=>
    {
        let words = text.split(" ");
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let t = capitalizedWords.join(" ");
        setText(t);
    }
    const handleUpClick=()=>{
        console.log("clicked",text)
        let t = text.toUpperCase();
        setText(t);
    }
    const handleClearClick=()=>
    {
        setText("")
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
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
              
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lowercase</button>

                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Screen</button>

                <button className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize first letter</button>


                </div>
                <div className="container my-3">
                    <h2>Your text summary :</h2>
                    
                    {/* <p>your text have {text.trim().split(/\s +/).length} words {text.length} characters</p> */}
                    <p>your text have {text.split(" ").length} words {text.length} characters</p>
                   
                    <p>{text.split(" ").length * 0.008} minutes read </p>
                    {/* <p>{text.trim().split(/\s +/).length * 0.008} minutes read </p> */}
                    <p>Preview</p>
                    <p>{text}</p>
                </div>
                </>
            )
}