import React,{useState} from 'react'



export default function Textform(props){
    const [text,setText] = useState("");
   
    const handleCapClick=()=>
    {
        let words = text.split(" ");
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let t = capitalizedWords.join(" ");
        setText(t);
        props.showAlert("Capitalized first word","success")
    }
    const handleUpClick=()=>{
        console.log("clicked",text)
        let t = text.toUpperCase();
        setText(t);
        props.showAlert("Uppercased every word","success")
    }
    const handleClearClick=()=>
    {
        setText("")
        props.showAlert("Text cleared","success")
    }
    const handleDownClick=()=>{
        console.log("clicked",text)
        let t = text.toLowerCase();
        setText(t);
        props.showAlert("Lowercased every word","success")
    }
    const handleOnChange=(e)=>{
        console.log("onchange")
        setText(e.target.value)
    }
    const handleCopyClick=()=>{
        console.log("copy clicked")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has copied to clipboard ","success")
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    return (  <>
                <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h1> {props.heading}</h1>
                <div className="mb-3">

                    <textarea
                    className="form-control"
                    id="myBox"
                    rows={5}
                    //defaultValue={""}
                    onChange={handleOnChange}
                    value={text}
                    style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white',fontSize:'20px'}}
                    />
               </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
              
                <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Lowercase</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Capitalize first letter</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Screen</button>
                



                </div>
                <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
                    <h2>Your text summary :</h2>
                    
                    {/* <p>your text have {text.trim().split(/\s +/).length} words {text.length} characters</p> */}
                    <p>your text has {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>


                   
                    <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length * 0.008} minutes read </p>
                    {/* <p>{text.trim().split(/\s +/).length * 0.008} minutes read </p> */}
                    <p>Preview</p>
                    <p>{text.length>0?text:"Enter something in textbox above to preview here.."}</p>
                </div>
                </>
            )
}