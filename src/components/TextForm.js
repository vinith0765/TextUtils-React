import React,{useState} from 'react'

const TextForm = ({heading = 'DefaultHeading', mode = "light", showAlert}) => {
    const handleUpperCase = () => {
    // e.preventDefault(); /*prevent the default form submission OR make the button explicitly type="button" */
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase","success")
  }

  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase","success")
  }

  const handleCamelCase = () => {
    let newText = text.toLowerCase()
                  .split(/[\s-_]+/)
                  .map((word,index) =>
                  index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                  .join("");
    setText(newText);
    showAlert("Converted to Camelcase","success")
  }

  const handlePascalCase = () => {
    let newText = text.toLowerCase()
                  .split(/[\s-_]+/)
                  .map(word =>
                  word.charAt(0).toUpperCase() + word.slice(1))
                  .join("");
    setText(newText);
    showAlert("Converted to Pascalcase","success")
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    showAlert("Text cleared","success")
  }
  
  // enable to edit the text
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleRemoveExtraSpace = () => {
    let newText = text.trim().split(/\s+/); //with trim() spaces, tabs, newlines are removed and \s match any whiespaces
    setText(newText.join(" "));
    showAlert("Removed extra spaces","success")
  }

  const handleCopyText = () => {
    if (text.trim() !== "") {
    navigator.clipboard.writeText(text)
      // .then(() => {
      //   alert("Text copied to clipboard!");
      // })
      // .catch((err) => {
      //   console.error("Failed to copy: ", err);
      // });
  } else {
    alert("Nothing to copy!");
  }
  // var text = document.getElementById("myTxt");
  // text.select();
  // navigator.clipboard.writeText(text.value)
  showAlert("Text Copyed","success")
  }
  
  const [text,setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
    <div className="container" style={{color: mode === "dark" ? "white" : "black"}}>
        <h3>{heading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Enter Text for Analyse</label>
            <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="myTxt" style={{backgroundColor: mode === "dark" ? "gray" : "white", color:mode === "dark" ? "white" : "black"}} rows="5"/>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UPPERCASE</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLowCase}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCamelCase}>Convert to camelCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handlePascalCase}>Convert to PascalCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopyText}>Copy text</button>
    </div>
    <div className="container my-1" style={{color: mode === "dark" ? "white" : "black"}}>
    <h2> Your Text Summary</h2>
    <p>{words} words and {text.length} Characters </p>
    <p>{0.008 * words} Minutes to read</p>
    </div>
    </>
  )
}

export default TextForm;

