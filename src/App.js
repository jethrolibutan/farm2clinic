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
import Recipes from "./pages/RecipesProducePage/Recipes";
import Training from "./pages/TrainingPage/Training";
import Publications from "./pages/PublicationsPage/Publications";
import InTheNews from "./pages/InTheNews/InTheNews";
import Donate from "./pages/DonatePage/Donate";
import GetInvolved from "./pages/GetInvolvedPage/GetInvolved";
import SpanishRecipes from "./pages/RecipesProducePage/SpanishRecipes";
import AsparagusSpanish from "./pages/RecipesProducePage/Asparagus/AsparagusSpanish";
import BellPepperSpanish from "./pages/RecipesProducePage/BellPepper/BellPepperSpanish";
import BroccoliSpanish from "./pages/RecipesProducePage/Broccoli/BroccoliSpanish";
import CabbageSpanish from "./pages/RecipesProducePage/Cabbage/CabbageSpanish";
import CarrotSpanish from "./pages/RecipesProducePage/Carrot/CarrotSpanish";
import CauliflowerSpanish from "./pages/RecipesProducePage/Cauliflower/CauliflowerSpanish";
import KaleSpanish from "./pages/RecipesProducePage/Kale/KaleSpanish";
import CollardSpanish from "./pages/RecipesProducePage/Collard/CollardSpanish";
import SpaghettiSquashSpanish from "./pages/RecipesProducePage/SpaghettiSquash/SpaghettiSquashSpanish";
import SweetPotatoSpanish from "./pages/RecipesProducePage/SweetPotato/SweetPotatoSpanish";
import TurnipSpanish from "./pages/RecipesProducePage/Turnip/TurnipSpanish";
import ZucchiniSpanish from "./pages/RecipesProducePage/Zucchini/ZucchiniSpanish";

import Artichoke from "./pages/RecipesProducePage/Artichokes/Artichoke";

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
        <Route path="artichoke" element={<Artichoke />} />
        <Route path="asparagusSpanish" element={<AsparagusSpanish />} />
        <Route path="bellpepperSpanish" element={<BellPepperSpanish />} />
        <Route path="broccoliSpanish" element={<BroccoliSpanish />} />
        <Route path="cabbageSpanish" element={<CabbageSpanish />} />
        <Route path="cauliflowerSpanish" element={<CauliflowerSpanish />} />
        <Route path="kaleSpanish" element={<KaleSpanish />} />
        <Route path="collardSpanish" element={<CollardSpanish />} />
        <Route
          path="SpaghettiSquashSpanish"
          element={<SpaghettiSquashSpanish />}
        />
        <Route path="sweetPotatoSpanish" element={<SweetPotatoSpanish />} />
        <Route path="turnipSpanish" element={<TurnipSpanish />} />
        <Route path="zucchiniSpanish" element={<ZucchiniSpanish />} />
        <Route path="carrotSpanish" element={<CarrotSpanish />} />
      </Routes>
    </div>
  );
}

export default App;
