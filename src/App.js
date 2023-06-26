
import { useState } from 'react';
import './App.css';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';






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
         <Navbar title="TextUtils"  mode={mode} toggleMode = {toggleMode}/>
         <br/>
        <Alert alert={alert}/>
         <div className="container my-3">

   {/* <Aboutus/> */}
         <Textform  showAlert = {showAlert} heading = "Enter your text below:" mode={mode} />
         </div>

   {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
     {/* <Navbar/> */}
    </>
  );
}

export default App;
