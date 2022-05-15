import "./App.css";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [format, setFormat] = useState("");
  const [align, setAlign] = useState("");
  const ref = useRef();

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

  return (
    <div className="App ">

      <nav className="h-5 navbar justify-content-center text-black navbar-expand-lg navbar-light bg-info">
        
      <div className="text-center m-1">
            <span className="m-3">Change Block Type</span>
            <div clas sName="flex col m-2 text-center">
            <div className="mb-3">
              <select
                className="w-50 text-center bg-light"
                onChange={(e) => {
                  console.log(e.target.value);
                  setAlign(e.target.value);
                }}
              >
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
                <option value="text">Text</option>
              </select>
            </div>
          </div>
          </div>

          

          <div className="text-center m1">
            <span className="m-3">Change Font Format</span>
            <div className="flex col m-2 text-center">
            <button className="btn btn-dark m-1" onClick={setBold}>
              Bold
            </button>
            <button className="btn btn-dark m-1" onClick={setUnderline}>
              UnderLine
            </button>
            <button className="btn btn-dark m-1" onClick={setItalic}>
              Italic
            </button>
            <button className="btn btn-dark m-1" onClick={setStrike}>
              Strike
            </button>
          </div>
          </div>

          

          <div className="text-center m-1">
            <span className="m-3">Change Font Alignment</span>
            <div className="flex col m-2 text-center">
            <div className="mb-3">
              <select
                className="w-50 text-center bg-light"
                onChange={(e) => {
                  console.log(e.target.value);
                  setFormat(e.target.value);
                }}
              >
                <option value="text-start">Start</option>
                <option value="text-center">Center</option>
                <option value="text-end">End</option>
              </select>
            </div>
          </div>
          </div>

          

      </nav>

      <div className="container mt-5 ">
        <h1 className="text-center">Welcome to Demo App</h1>

        <div className="m-3">
          <div className="form-group row text-center">
            <h4 className="mt-4 mb-4">Enter text below</h4>

            <input
              className={`${format} ${align}`}
              ref={ref}
              // value={input}
              // onChange={onChnageHandler}
            />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
