import React from 'react'



const CreateElement =()=> React.createElement('div',{className:'parentTest'},React.createElement('h1',{id:'test'},'Hello without JSX'))
export default CreateElement