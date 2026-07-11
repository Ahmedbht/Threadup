import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import "./App.css";

function App() {
  return(
    <div className="App">
      <Navbar/>
      <div className="container">
        <Feed/>
      </div>
    </div>
  );
}
export default App;