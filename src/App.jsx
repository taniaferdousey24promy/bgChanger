
import { useState } from 'react'
import './App.css'

function App() {
  let [color , setColor ] = useState("black");



  return (
    <>
    {/* full screen or outer div */}
    <div className=' w-full duration-200  h-screen  ' 
    style={{backgroundColor:color}}>
      {/* inner div */}
      <div className=' flex flex-wrap justify-center bottom-12 inset-x-0  fixed '>
        {/*  badge div */}
        <div className=' rounded-full flex flex-wrap justify-center gap-5 p-5 ' style={{backgroundColor:"white"}}>
          <button onClick={() => setColor("red")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "red"}}
          >Red</button>
          <button onClick={() => setColor("blue")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "blue"}}
          >Blue</button>
          <button onClick={() => setColor("green")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "green"}}
          >Green</button>
          <button onClick={() => setColor("olive")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "olive"}}
          >Olive</button>
          <button onClick={() => setColor("gray")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "gray"}}
          >Gray</button>
          <button onClick={() => setColor("yellow")} className='btn rounded-full  px-5 py-2 text-black shadow-lg '
          style={{backgroundColor : "yellow"}}
          >Yellow</button>
          <button onClick={() => setColor("pink")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "pink"}}
          >Pink</button>
          <button onClick={() => setColor("purple")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "purple"}}
          >Purple</button>
          <button onClick={() => setColor("lavender")} className='btn rounded-full  px-5 py-2 text-black shadow-lg '
          style={{backgroundColor : "lavender"}}
          >Lavender</button>
          <button onClick={() => setColor("white")} className='btn rounded-full  px-5 py-2 text-black shadow-lg '
          style={{backgroundColor : "white"}}
          >White</button>
          <button onClick={() => setColor("black")} className='btn rounded-full  px-5 py-2 text-white shadow-lg '
          style={{backgroundColor : "black"}}
          >Black</button>

          {/* <button className='btn rounded-full bg-green-500 px-5 py-2 text-white shadow-lg '>Green</button>
          <button className='btn rounded-full bg-blue-500 px-5 py-2 text-white shadow-lg '>Blue</button>
          <button className='btn rounded-full bg-gray-500 px-5 py-2 text-white shadow-lg '>Gray</button>
          <button className='btn rounded-full bg-yellow-500 px-5 py-2 text-white shadow-lg '>Yellow</button>
          <button className='btn rounded-full bg-pink-500 px-5 py-2 text-white shadow-lg '>Pink</button>
          <button className='btn rounded-full bg-purple-500 px-5 py-2 text-white shadow-lg '>Purple</button> */}

          
        </div>
      </div>
      



        

    </div>
      
    </>
  )
}

export default App
