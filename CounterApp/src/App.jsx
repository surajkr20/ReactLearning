import {useState} from 'react'
import './App.css'

function App() {

  // let count = 0;

  const [Count, setCount] = useState(0)
 
  const DecreseHandler = () =>{
    if(Count>0){
      setCount(Count-1)
    }
  }

  const IncreseHandler = () =>{
    setCount(Count+1)
  }

  
  const resetHandler = () =>{
    setCount(0);
  }

  return (
    <div className='flex justify-center items-center flex-col gap-8 bg-[#344151] w-[100vw] h-[100vh]'>
     <div>
      <h1 className='font-serif text-2xl text-blue-200'>Increament & Decrement</h1>
     </div>
        
     <div className='flex gap-10 bg-white text-black to-black p-2 m-4'>
      <div>
        <button className= 'text-2xl bg-blue-400 border-x-black decoration-solid w-[3rem] border-[1.5px] border-black border-solid h-full' onClick={DecreseHandler}>-</button>
      </div>
      <div className='text-center text-2xl text-black'>
        {Count}
      </div>
      <div>
        <button onClick={IncreseHandler} className='h-full text-2xl bg-blue-400 border-x-black decoration-solid w-[3rem] border-[1.5px] border-black border-solid' >+</button>
      </div>
     </div>

      <button onClick={resetHandler} value={Count} className='bg-blue-600 decoration-solid w-[5rem] h-[2rem] font-serif border-[1.5px] border-black border-solid'>Reset</button>
    </div>
  )
}

export default App
