// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myobj = {
  //   name:'sam',
  //   age:20
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
     <Card userName ="Desai" photo="https://images.pexels.com/photos/9258612/pexels-photo-9258612.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
     <Card  photo="https://images.pexels.com/photos/2892274/pexels-photo-2892274.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

    </>
  )
}

export default App
