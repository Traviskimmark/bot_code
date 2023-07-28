import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import YourBotArmy from './YourBotArmy';

function App() {
  const[getData,setGetData]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8001/bots")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setGetData(data)
    })
  }, [])



  return (
  


    <div >
      {getData && <YourBotArmy data={getData}/>}
      
   
    </div>
  );
}

export default App;
