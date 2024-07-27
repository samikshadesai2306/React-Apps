import { useState } from 'react'

// import './App.css'

function App() {
  const [color, setcolor] = useState("white")

  return (
   <div className=' w-full h-screen duration-200'style={{backgroundColor:color}} >
      <div className='fixed  flex flex-warp justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}> Red</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"Green"}} onClick={()=>setcolor("green")}> Green</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"Blue"}} onClick={()=>setcolor("Blue")}> Blue</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"olive"}} onClick={()=>setcolor("olive")}> Olive</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"Black"}} onClick={()=>setcolor("Black")}> Black</button>
          <button className='outline-none px-4 rounded-full py-1 text-black shadow-lg' style={{backgroundColor:"White"}} onClick={()=>setcolor("White")}> White</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"purple"}} onClick={()=>setcolor("purple")}> Purple</button>    
          <button className='outline-none px-4 rounded-full py-1 text-black shadow-lg' style={{backgroundColor:"lavender"}} onClick={()=>setcolor("lavender")}> Lavender</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"Pink"}} onClick={()=>setcolor("Pink")}> Pink</button>
          <button className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"Gray"}} onClick={()=>setcolor("Gray")}> Gray</button>
          </div>
      </div>
   </div>
  )
}

export default App
