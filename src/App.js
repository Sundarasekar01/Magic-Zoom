import Greet from './components/Functional'
import Welcome from './components/Class'
import './App.css'
import CreateElement from './components/CreateElement';
import PropsFunc from './components/PropsFunc'
import PropsClass from './components/PropsClass'
import StateClass from './components/StateClass'


function App() {
  return (
    <div className='App'>
      <h1>Normal Text </h1>
      <Greet/>
      <Welcome/> 
      <CreateElement/>
      <PropsFunc FirstName='Sundara' LastName='Sekar'/>
      <PropsClass Sentence='Happy Coding'/>
      <StateClass/>
    </div>
  );
}

export default App;
