import "./App.css";
import Login from "./Login";
import Profile from "./Profile";
import ColorSelector from "./ColorSelector";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <ImageComponent />
      <Profile />
      <Login />
      <ColorSelector />
    </div>
  );
}

export default App;
