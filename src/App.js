import Greet from './components/Functional'
import Welcome from './components/Class'
import './App.css'
import CreateElement from './components/CreateElement';
import PropsFunc from './components/PropsFunc'
import PropsClass from './components/PropsClass'
import StateClass from './components/StateClass'
import Counter from './components/Counter'
import EventHandler from './components/EventHandler'
import ParentComp from './components/parentComp'
import ConditionalRender from './components/ConditionalRender';
import User from './components/Dip/useState'

function App() {
  return (
    <div className='App'>


      <User/>







      {/* <h1>Normal Text </h1>
      <Greet/>
      <Welcome/> 
      <CreateElement/>
      <PropsFunc FirstName='Sundara' LastName='Sekar'/>
      <PropsClass Sentence='Happy Coding'/>
      <StateClass/>
      <Counter/>
      <EventHandler/>
      <ParentComp/>
      <ConditionalRender/> */}
    </div>
  );
}

export default App;
