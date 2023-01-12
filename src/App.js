import './App.css';
import {BlogForm} from './Components/BlogForm';


function App() {
  return (
    <div>
        <div className="navbar">
            <navbar/>
        </div>
        <div className="GameBody">
          <h1>
            Welcome To Game Rater 
          </h1>
          <BlogForm/>
        </div>
      </div>
  );
}

export default App;
