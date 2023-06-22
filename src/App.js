//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';





function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>
{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#012963';
  

  }else{
    setMode('light')
    document.body.style.backgroundColor ='white';

  }
}

  return (
    <>
         <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
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
