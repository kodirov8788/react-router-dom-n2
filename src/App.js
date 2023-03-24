import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>APP JS</h1>
      <Link to={"/blog"}><h2>Blog</h2></Link>
      <Link to={"/about"}><h2>About</h2></Link>
    </div>
  );
}

export default App;
