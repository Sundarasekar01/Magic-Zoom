import React,{useState} from 'react'



function Use() {

    const [value,setValue] = useState(0)
    const [name,setName] = useState('')

    
const ChangeMin=()=>{
    setValue(value-1)
    }
   const ChangeMax=()=>{
     setValue((a)=>a+1)
     setValue((a)=>a+1)
    }

    const Change=()=>{
        setName('sundara')
    }

  return (
    <div>useState{value}
    <button onClick={ChangeMax}>Increment</button>
    <button onClick={ChangeMin}>Decrement</button>

    <h1>Hello{name}</h1>
    <button onClick={Change}>Decrement</button>
    </div>
  )
}

export default Use