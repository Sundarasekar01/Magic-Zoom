import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       isLogged:true
      }
    }
  render() {

//Approach 1 - if else condition

// if(this.state.isLogged){
//     return <div><h1>User Loged in</h1></div>
// }else{
//     return <div><h1>User Loged out</h1></div>
// }


//Approach 2 - Element variable

// let message=''
// if(this.state.isLogged){
//     message='User logged in'
//     }else message='User Logged Out'


// return <div><h1>{message}</h1></div>



//Approach 3 - Conditional Ternary operator

return this.state.isLogged?<div><h1>Logged In</h1></div>:<div><h1>Logged Out</h1></div>


//Approach 4 - Short circuit operator

// return this.state.isLogged && <div><h1>Logged In</h1></div>




    
  }
}

export default ConditionalRender