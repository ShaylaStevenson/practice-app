import profilePicture from "./img/profilePicture.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Practice App</h1>
      <h2>Author: Shayla Stevenson</h2>
      <img src={profilePicture} alt="Shayla Stevenson" />
    </div>
  );
}

export default App;
