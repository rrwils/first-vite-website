import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as d3 from "d3";

function App() {
  const data = [4, 8, 15, 16, 23, 42];
  console.log("Max:", d3.max(data));

  return (
    <>
        <h1>Hello World!</h1>
      
    </>
    
  )
}

export default App
