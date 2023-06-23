//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import router
//import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Alert from './components/Alert';





function App() {
   //const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  
//   const showAlert = (message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//         setAlert(null);
//     }, 1500);
// }
  const toggleMode = ()=>
{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#012963';
  //showAlert("Dark Mode Enabled","Success")

  }else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    //showAlert("Light Mode Enabled","Success")
  }
}




  return (
    <>
         <Navbar title="TextUtils"  mode={mode} toggleMode = {toggleMode}/>
         <br/>
         {/* <Alert alert={alert}/> */}
         <div className="container my-3">

   {/* <Aboutus/> */}
         <Textform heading = "Enter your text below:" mode={mode} />
         </div>

     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
     {/* <Navbar/> */}
    </>
  );
}

export default App;
