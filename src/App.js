import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
 const router = createBrowserRouter([
  {"path":"/",element:<Home/>},
  {"path":"home",element:<Home/>},
  {"path":"about",element:<About/>},  
 ])

function App() {  
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
