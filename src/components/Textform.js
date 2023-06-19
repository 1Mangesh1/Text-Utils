import React,{useState} from 'react'



export default function Textform(props){
    const [text,setText] = useState("Enter text here...");
    const handleUpClick=()=>{
        console.log("clicked")
    }
    return (  
                <div>
                <h1> {props.heading}</h1>
                <div className="mb-3">

                    <textarea
                    className="form-control"
                    id="myBox"
                    rows={10}
                    defaultValue={""}
                    value={text}
                    />
               </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>

                </div>
            )
}