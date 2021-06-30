import './App.css';
import Navbar from './components/navbar/Navbar';
import DIO from "./components/DIO/DIO"
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Launch from './components/Launch/Launch'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [buttonToggle,setButtonToggle]=useState('1');
  return (
    <div className="App">
      <Navbar setButtonToggle={setButtonToggle}/>
      { buttonToggle=='1'&&<DIO/>}
      { buttonToggle=='2'&&<Launch/>}
      <Footer/>
    </div>
  );
}

export default App;
