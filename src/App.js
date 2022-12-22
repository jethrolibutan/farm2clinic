import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";
import Support from "./pages/Support";
import WhatWeDo from "./pages/WhatWeDo";
import Partners from "./pages/Partners";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Exercises from "./pages/Exercises";
import Recipes from "./pages/Recipes";
import Training from "./pages/Training";
import Publications from "./pages/Publications";
import InTheNews from "./pages/InTheNews";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="whatWeDo" element={<WhatWeDo />} />
        <Route path="meetTheTeam" element={<MeetTheTeam />} />
        <Route path="support" element={<Support />} />
        <Route path="partners" element={<Partners />} />
        <Route path="programs" element={<Programs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="resources" element={<Resources />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="training" element={<Training />} />
        <Route path="publications" element={<Publications />} />
        <Route path="inTheNews" element={<InTheNews />} />
        <Route path="donate" element={<Donate />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="getInvolved" element={<GetInvolved />} />
      </Routes>
    </div>
  );
}

export default App;
