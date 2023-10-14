// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'c:/Users/Dell/Desktop/newre/03tailwindprops/src/components/card.jsx'
function App() {
  // eslint-disable-next-line no-unused-vars
  let myObj = {
    username : "syamsai",
    Age : 21
  }

  return (
    <>
      <h1 className='bg-green-400 px-4 rounded-xl text-black'>Tailwind css</h1>
      <Card  username="syam" btnText="click me"/>
      <Card  username="sai" />
    </>
  )
}

export default App
