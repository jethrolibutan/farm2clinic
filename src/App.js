import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import ContactUs from "./pages/ContactPage/ContactUs";
import About from "./pages/About Page/About";
import MeetTheTeam from "./pages/MeetTheTeam/MeetTheTeam";
import Support from "./pages/SupportPage/Support";
import WhatWeDo from "./pages/WhatWeDoPage/WhatWeDo";
import Partners from "./pages/PartnersPage/Partners";
import Programs from "./pages/ProgramsPage/Programs";
import Exercises from "./pages/ExercisePage/Exercises";
import Recipes from "./pages/RecipesPage/Recipes";
import Training from "./pages/TrainingPage/Training";
import Publications from "./pages/PublicationsPage/Publications";
import InTheNews from "./pages/InTheNews/InTheNews";
import Donate from "./pages/DonatePage/Donate";
import GetInvolved from "./pages/GetInvolvedPage/GetInvolved";
import SpanishRecipes from "./pages/RecipesPage/SpanishRecipes";

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
        <Route path="recipes" element={<Recipes />} />
        <Route path="spanishRecipes" element={<SpanishRecipes />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="training" element={<Training />} />
        <Route path="publications" element={<Publications />} />
        <Route path="inTheNews" element={<InTheNews />} />
        <Route path="donate" element={<Donate />} />
        <Route path="getInvolved" element={<GetInvolved />} />
      </Routes>
    </div>
  );
}

export default App;
