import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Execution from "./Section-2_5/Vid-52/Execution";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Execution />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
