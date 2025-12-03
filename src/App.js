import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) => {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)}, 2000);
  }

  const toggleMode = () => {
    if(mode === "light")
    {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is Enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" about ="AbortText" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert = {alert}/>
    {/* { <Navbar /> }
    <Navbar title="Textutils" />
    <Navbar about ="AbortText"/> */}
    <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<TextForm showAlert={showAlert} heading="myHeading" mode={mode} />}
          />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
