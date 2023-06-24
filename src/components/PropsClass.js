import React,{Component} from 'react'

class ClassComp extends Component{
    render(){

        //Destructuring Inside Function body
       const {Sentence} = this.props
       return <h1>Props in ClassComp - {Sentence}</h1>



       // Common Method
        // return <h1>Props in ClassComp - {this.props.Sentence}</h1>
    }
}

export default ClassComp