import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  

//   incre(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   };



//use the setState function with the callback syntax. 
  // the callback syntax of setState, where the current state (a) is passed as an argument

  incre(){
    this.setState(a=>{
      return{count: a.count + 1}
    });
  };
  
// decri(){
//     this.setState({
//       count: this.state.count - 1
//     });
//   };


  decri(){
    this.setState(a=>{
        return {count: a.count - 1}
    })
  }

  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button onClick={()=>this.incre()}>Increment</button>
        <button onClick={()=>this.decri()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
