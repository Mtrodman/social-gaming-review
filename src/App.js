
import './App.css';
import {BlogForm} from './Components/BlogForm';
import {GameFormSubmit} from './Components/GameFormSubmit';

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
          <br/>
          <br/>
          <GameFormSubmit/>
        </div>
      </div>
  );
}

export default App;
