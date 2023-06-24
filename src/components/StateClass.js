import React,{Component} from 'react'


class StateClass extends Component{

    constructor(){
        super()
        this.state={
            Display:'StateClass'
        }
    }

    Change(){
        this.setState({
            Display:'Its working'
        })
    }

render(){
    return(

    <div>
     <h1>{this.state.Display}</h1> 
     <button onClick={()=>this.Change()}>Change State</button>
    </div>
       
    )
}

}

export default StateClass