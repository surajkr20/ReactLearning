import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [Text, setText] = useState('');
  const [name, setName] = useState('suraj');

  // variation1 -> Every render
  // useEffect(() =>{
  //   console.log("hello")
  // })

  // variant2 -> first render
  // useEffect(()=>{
  //   console.log("rendering");
  // },[]) // [] - list of dependency

  // variation3 -> first render + whenever dependency change
  // useEffect(()=>{
  //   console.log("UI rendering")
  // },[name]) // if name variable change then this fun render.

  // variaton4 -> to handle unamount of a component
  useEffect( () =>{
    console.log('listner added');
    return ( () =>{
      console.log('listner removed')
    })
  })

  const changeHandler = (event) =>{
    console.log(Text)
    setText(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={changeHandler} />
    </>
  )
}

export default App
