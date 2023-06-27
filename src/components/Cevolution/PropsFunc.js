
//Destructuring Inside Parameter
 
// const Functional = ({FirstName,LastName})=>{

const Functional = props =>{


 //Destructuring Inside Function body
 const {FirstName,LastName} = props
 return <h1>Props in FunctionalComp - {FirstName}{LastName}</h1>

//Common Method
// return <h1>Props in FunctionalComp - {props.FirstName}{props.LastName}</h1>

}

export default Functional