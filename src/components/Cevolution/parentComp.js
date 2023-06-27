import React, { Component } from 'react'
import ChildComp from './ChildComp'

class parentComp extends Component {

constructor(props) {
  super(props)

  this.state = {
     parent:'Murugan'
  }

  this.notify= this.notify.bind(this)

}

notify(child)
{
    alert(`Parent is ${this.state.parent} and Child is ${child}`)
}
  render() {
    return (
      <div>
        {/* //passing props as method to childcomp */}
        <ChildComp  display={this.notify}/>
      </div>
    )
  }
}

export default parentComp