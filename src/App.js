//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

export default function App() {
  const [ Mode , setMode ] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type: 'success'
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!","success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'> 
    {/* <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>} />
    </Routes>  */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>
    </div> 
    {/* </Router> */}
    
    </>
  );
}


