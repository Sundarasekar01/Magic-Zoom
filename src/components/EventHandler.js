import React, { Component } from 'react'

class EventHandler extends Component {


constructor(props) {
  super(props)

  this.state = {
     message:'Event Handler'
  }

//   Approach 3 - Binding in Constructor
// this.change= this.change.bind(this)

}

// change(){
//     this.setState({
//         message:'Event Changed'
//     })
// }

// Approach 4 - Class property as arrow function
change = ()=>{
this.setState({
    message:'Event Changed'
})
}
  render() {
    return (
      <div>
     <h1>{this.state.message}</h1>

     {/* Approach 1 - Binding in render
     <button onClick={this.change.bind(this)}>Change Event</button> */}



     {/* Approach 2 - Arrow function in render 
     <button onClick={()=>this.change()}>Change Event</button> */}

<button onClick={this.change}>Change Event</button>

      </div>
    )
  }
}

export default EventHandler