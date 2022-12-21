import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
