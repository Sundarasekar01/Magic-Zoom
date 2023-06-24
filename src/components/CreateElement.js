import React from 'react'



const CreateElement =()=> React.createElement('div',{className:'parentTest'},React.createElement('h1',{id:'test'},'Without JSX - Using React.createElement'))
export default CreateElement