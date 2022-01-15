import React, { useState } from 'react'


export default function Textform(props) {
    const handleclear = () => {
        setText("")
    }
    const handleselect = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showalert('Text copied','success')
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Text converted tolowercase",'success')
    }
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert('Text converted touppercase','success')
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="form-group mt-5" >
                    <label htmlFor="exampleFormControlTextarea1" style={{ fontSize: "25px" }}>Enter Your Beutiful Text Here</label>
                    <textarea className="form-control mt-2" onChange={handleonchange} value={text} id="exampleFormControlTextarea1" rows="10" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0c2947', color: props.mode === 'light' ? 'black' : 'white',fontSize:'25px'}}></textarea>
                </div>
                <button className="btn btn-primary mt-2" onClick={handleupclick}>Convert to uppercase</button>
                <button className="btn btn-primary ml-3 mt-2" onClick={handleloclick}>Convert to lowerercase</button>
                <button className="btn btn-primary ml-3 mt-2" onClick={handleselect}>copy text</button>
                <button className="btn btn-primary ml-3 mt-2" onClick={handleclear}>clear text</button>
                <div className="container mt-4">
                    <h1>Your Text Summary :</h1>
                    <h5>Your text Contain's {text.length} letters</h5>
                    <h5>Your text Contain's {text.split(" ").length} words</h5>
                    <h5>Time reqiured to read your text is :{0.0008 * text.length} minutes</h5>
                </div>
            </div>
        </>

    )
}
