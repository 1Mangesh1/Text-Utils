
import { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  
  const [mode, setMode] = useState('light');
 
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>
{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#012963';
    showAlert("dark mode chalu","success");
    document.title = "Textutils Dark Mode"

  }else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert("light mode chalu","success");
    document.title ="Textutils Light Mode"
  } 
}




  return (
    <>
<Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode = {toggleMode}/>
    <Alert className="my-3" alert={alert}/>
    <div className="container my-3"> </div>
      <Routes>
      
        <Route path = "/" element = {<Textform  showAlert = {showAlert} heading = "Enter your text below:" mode={mode} />}/>
        
         
        <Route path = "/about" element = {<Aboutus/>}/>
      
      </Routes>
         {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
           {/* <Navbar/> */}
           </Router>
    </>
  );
}

export default App;
