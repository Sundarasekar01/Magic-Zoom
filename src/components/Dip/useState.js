import React,{useEffect, useRef, useState} from 'react'



function Use() {

    const [value,setValue] = useState(0)
    const [name,setName] = useState('')
    const Inputs = useRef('')
    console.log(Inputs)
    

    useEffect(()=>
    console.log('loaded'),[value]
    )


    
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

    <h1>Hello {name}</h1>
    <button onClick={Change}>Change</button>
    </div>
  )
}

export default Use