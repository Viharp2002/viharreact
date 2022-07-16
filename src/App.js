import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import About from "./components/About";

// React Router (Its syntax)
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; 

function App() {
  const [mode,setMode] =  useState('light');
  const [alert,setAlert] = useState(null); //Bydefault it will be null

  const showAlert = (messege,type)=>{
    // Initially alert null hatu pan have eno apde object banavyo
    setAlert({ 
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null); //We did this because if we dismiss the alert button and try to get light or dark mode...the alert messege doesn't come again because we have dismidded it once. So we remove the dismiss tag first and then set a timeout function for 2 seconds for automatically remove the alert tag
    }, 2000);
  }

  const togglemode = ()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark Mode has been enabled","success");
    document.title = "Textutils - DarkMode";
      }
      else
      {
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled","success")
        setMode('light');
    document.title = "Textutils - LightMode";
  }
  }
  // This is for pop up the title for user attraction but it is bad user Interface 
  // setInterval(() => {
  //   document.title = "Install the App Now";
  // }, 2000);

  // setInterval(() => {
  //   document.title = "Clean Virus Now";
  // }, 1500);

  return (
    <>
    {/* <Navbar title="Vihar" abouts="AboutMe" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>   */}

    <Router>
      {/* This is global <Router>..Inside it we define all code */}
        <Navbar title="Vihar" abouts="AboutMe" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <TextForm showAlert={showAlert} heading="This is Example" /> */}
        <Routes>
        {/* In this Routes we define path of different urls without refreshing the page */}
                <Route path="/" element={<TextForm showAlert={showAlert} heading="This is Example" />}>
                </Route>
                <Route exact path="/about" element={<About/>}>
                </Route>
          {/* We have used 'Exact' because without it react does partial matches not exact matches */}
          {/* /users -> component 1 */}
          {/* /users/home -> component 2 */}
          {/* So if we write /users/home but it selects first one as partial(first) match */}
        </Routes>
        {/* <About/> */}
        </div>
          {/* <Navbar/> */}
    </Router>
    </>
  );
}

export default App;
