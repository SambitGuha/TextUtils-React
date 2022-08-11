
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] =useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 const toggleMode = ()=>{
     if(mode == 'light')
     {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
     }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
      
    }
  return (
    <>
   {/* <Router> */}
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} aboutText={About}/>
  <Alert alert={alert}/>

  <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route>
          </Routes> */}
        </div>
  {/* // </Router> */}
 
 
    </>
  );
}

export default App;
