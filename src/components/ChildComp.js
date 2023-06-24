import React from 'react'

function ChildComp(props) {
  return (
    <div>
        
        <button onClick={()=>props.display('Sundara')}>props as method</button>
    </div>
  )
}

export default ChildComp