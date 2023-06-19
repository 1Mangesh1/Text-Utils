//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About'


function App() {
  return (
    <>
         <Navbar title="TextUtils" />
         <div className="container my-3">
          <About/>
         <Textform heading = "Enter your text below:"/>
         </div>

     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
     {/* <Navbar/> */}
    </>
  );
}

export default App;
