import './App.css';
import { NavBar } from './components/NavBar';
import { Feed } from './components/Feed';

function App() {
  return (
    <div className="App">
      <NavBar/>    
      <div className='welcome'>  
      <h1>Welcome To Game Rator</h1>
      <h2>Make sure to leave a rating!</h2>   
      </div>
      <Feed/>   
    </div>
)}


export default App;
