import Greet from './components/Cevolution/Functional'
import Welcome from './components/Cevolution/Class'
import './App.css'
import CreateElement from './components/Cevolution/CreateElement';
import PropsFunc from './components/Cevolution/PropsFunc'
import PropsClass from './components/Cevolution/PropsClass'
import StateClass from './components/Cevolution/StateClass'
import Counter from './components/Cevolution/Counter'
import EventHandler from './components/Cevolution/EventHandler'
import ParentComp from './components/Cevolution/parentComp'
import ConditionalRender from './components/Cevolution/ConditionalRender';
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
