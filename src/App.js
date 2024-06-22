import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(async ()=>{
    let res = await fetch("https://node-express-zfxd.onrender.com/",{"method":"GET"});
    let json = await res.json();
    console.log(json);
  })
  return (
    <div className="App">
    <h1>this is react app</h1>
    </div>
  );
}

export default App;
