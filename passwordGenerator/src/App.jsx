
import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState(''); // password is blank because password generate krwana h

  const PasswordGenerator = useCallback(()=>{

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number){
      str += '0123456789';
    }
    if(character){
      str += '!~%#@$*+-/.,';
    }

    for(let i=1; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, number, character, setPassword]);

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();  // for selecting password for user exprience
    // passwordRef.current?.selectionRange(0,3); // select characters as per requirment
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    PasswordGenerator();
  },[length, number, character, PasswordGenerator])

  const passwordRef = useRef(null);

  return (
    <div>

      <h1 className='text-2xl text-center font-serif'>Password Generator</h1>

      <div className='flex items-center flex-col bg-blue-400 h-[15vh] w-[100vw] text-black'>
        <div className='flex items-center justify-cente'>
          <input type="text" value={password} placeholder='Password' readOnly ref={passwordRef} className='outline-none rounded-md h-[5vh] text-center w-[50vw]'/>
          <button className='bg-red-600 font-serif rounded outline-none p-1 m-3' onClick={copyPasswordToClip}>copy</button>
        </div>

        <div className='flex items-center justify-between  gap-3'>

          <input type="range" value={length} min={8} max={150} className="cursor-pointer" onChange={(e)=>{
            setLength(e.target.value)
          }} />
          <label>length : {length}</label>

          <label className='font-serif'>
            <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber((prev)=> !prev)}}/>Number
          </label>

          <label className='font-serif'>
            <input type="checkbox" defaultChecked={character} onChange={()=>{setCharacter((prev)=> !prev)}} />Character
          </label>

        </div>

      </div>

    </div>
  )
}

export default App;
