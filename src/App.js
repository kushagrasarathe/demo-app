import "./App.css";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const ref = useRef();

  function onChnageHandler(e) {
    setInput(e.target.value);
  }

  // functions to change input format

  function setBold() {
    ref.current.classList.toggle("bold");
    console.log("bold clicked");
  }

  function setUnderline() {
    ref.current.classList.toggle("underLine");
    console.log("underline clicked");
  }

  function setItalic() {
    ref.current.classList.toggle("italic");
    console.log("italic clicked");
  }

  function setStrike() {
    ref.current.classList.toggle("strike");
    console.log("strike clicked");
  }

  function changeToText() {
    ref.current.classList.toggle("text");
    console.log("changeToText clicked");
  }

  function changeToH1() {
    ref.current.classList.toggle("h1");
    console.log("changeToH1 clicked");
  }

  function changeToH2() {
    ref.current.classList.toggle("h2");
    console.log("changeToH2 clicked");
  }

  function changeToH3() {
    ref.current.classList.toggle("h3");
    console.log("changeToH3 clicked");
  }

  function getInitialState() {
    const value = "";
    return value;
  }

  // const [value, setValue] = useState(getInitialState);
  // const [style, setStyle] = useState("Text");

  // function changeBlockType(e) {
  //   if (e.target.value === "Text") {
  //     console.log("Text selected");
  //     ref.current.classList.toggle("text");
  //   } else if (e.target.value === "Heading1") {
  //     console.log("Heading1 selected");
  //     ref.current.classList.toggle("h1");
  //   } else if (e.target.value === "Heading2") {
  //     console.log("Heading2 selected");
  //     ref.current.classList.toggle("h2");
  //   } else if (e.target.value === "Heading3") {
  //     console.log("Heading3 selected");
  //     ref.current.classList.toggle("h3");
  //   }
  // }

  // function handleChange(e) {
  //   setValue(e.target.value);

  //   changeBlockType(e);

  // }

  
  // const [align, setAlign] = useState("");
  
  // align text
  function setStart() {
    console.log("start clicked");
    ref.current.classList.toggle("start");
  }

  function setCenter() {
    console.log("center clicked");
    ref.current.classList.toggle("center");
  }

  function setEnd() {
    console.log("end clicked");
    ref.current.classList.toggle("end");
  }

  return (
    <div className="App ">
      <div className="container mt-5 ">
        <h1 className="text-center">Welcome to Demo App</h1>

        
        <div className="m-3">
          <div className="form-group row text-center">
            <h4 className="mt-4 mb-4">Enter text below</h4>

            <input ref={ref} value={input} onChange={onChnageHandler} />
          </div>

          <div className="text-center mt-5 mb-2">
            <span className="m-3">Change Block Type</span>
          </div>

          <div className="flex col m-2 text-center">
            <div className="mb-3">
              <button className="btn  btn-info m-3" onClick={changeToText}>
                Text
              </button>
              <button className="btn  btn-info m-3" onClick={changeToH1}>
                Heading 1
              </button>
              <button className="btn  btn-info m-3" onClick={changeToH2}>
                Heading 2
              </button>
              <button className="btn  btn-info m-3" onClick={changeToH3}>
                Heading 3
              </button>
            </div>

            {/* <div className="mb-2">
           <select className="w-25 text-center bg-light" value={value} onChange={handleChange}>
              <option value="Text">Text</option>
              <option value="Heading1">Heading 1</option>
              <option value="Heading2">Heading 2</option>
              <option value="Heading3">Heading 3</option>
            </select>
           </div> */}
          </div>

          <div className="text-center mt-5 mb-2">
            <span className="m-3">Change Font Format</span>
          </div>

          <div className="flex col m-2 text-center">
            <button className="btn btn-info m-3" onClick={setBold}>
              Bold
            </button>
            <button className="btn btn-info m-3" onClick={setUnderline}>
              UnderLine
            </button>
            <button className="btn btn-info m-3" onClick={setItalic}>
              Italic
            </button>
            <button className="btn btn-info m-3" onClick={setStrike}>
              Strike
            </button>
          </div>

          <div className="text-center mt-5 mb-2">
            <span className="m-3">Change Font Alignment</span>
          </div>

          <div className="flex col m-2 text-center">
            <button className="btn btn-info m-3" onClick={setStart}>
              Start
            </button>
            <button className="btn btn-info m-3" onClick={setCenter}>
              Center
            </button>
            <button className="btn btn-info m-3" onClick={setEnd}>
              End
            </button>
          </div>


        </div>


      </div>
    </div>
  );
}

export default App;
