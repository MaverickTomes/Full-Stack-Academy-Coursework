//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Users from './components/Users';
import User from './components/User';

function App() {
  

  return (
    <>
      <Navigation />
      <h2>Block 24 demo</h2>
      <User />
      <Footer />
    </>
  )
}

export default App



/*
<Users />
<div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p>



      <ul>
        <li>Stuff</li>
        <li>More Stuff</li>
      </ul>
*/