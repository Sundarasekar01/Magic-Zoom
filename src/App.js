import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Hello Normal Text</h1>
      <Greet/>
      <Welcome/> 
    </div>
  );
}

export default App;
