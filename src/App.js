import './App.css';
import Bottomheader from './components/BottomHeader/Bottomheader';
import Comments from './components/comments/Comments';
import NavBar from './components/NavBar/NavBar';

function App() {
  const msg = "Labore nisi dolor adipisicing id duis reprehenderit. Do aliquip quis cupidatat sit occaecat do esse pariatur sint nostrud eiusmod aliqua quis. Voluptate reprehenderit quis ut reprehenderit. Tempor reprehenderit excepteur irure aute in."
  return (
    <div className="App">
      <NavBar />
      <Bottomheader />
    
      <div className="commentContainer">
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      <Comments username="username" date="date" message={msg} />
      </div>
    </div>
  );
}

export default App;
