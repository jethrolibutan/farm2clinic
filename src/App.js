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
import Exercises from "./pages/ExercisePage/ExercisesInEnglish/Exercises";
import ExerciseVideosInEnglish from "./pages/ExercisePage/ExercisesInEnglish/ExerciseVideosInEnglish";
import Balance from "./pages/ExercisePage/ExercisesInEnglish/Balance";
import ChronicPain from "./pages/ExercisePage/ExercisesInEnglish/ChronicPain";
import Flexibility from "./pages/ExercisePage/ExercisesInEnglish/Flexibility";
import Household from "./pages/ExercisePage/ExercisesInEnglish/HouseHold";
import Resistance from "./pages/ExercisePage/ExercisesInEnglish/Resistance";
import SeatedCardio from "./pages/ExercisePage/ExercisesInEnglish/SeatedCardio";
import SeatedCore from "./pages/ExercisePage/ExercisesInEnglish/SeatedCore";
import TotalBody from "./pages/ExercisePage/ExercisesInEnglish/TotalBody";
import Yoga from "./pages/ExercisePage/ExercisesInEnglish/Yoga";
import ExercisesInSpanish from "./pages/ExercisePage/ExercisesInSpanish/ExercisesInSpanish";
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
import CollardSpanish from "./pages/RecipesProducePage/Collards/CollardSpanish";
import SpaghettiSquashSpanish from "./pages/RecipesProducePage/SpaghettiSquash/SpaghettiSquashSpanish";
import SweetPotatoSpanish from "./pages/RecipesProducePage/SweetPotato/SweetPotatoSpanish";
import TurnipSpanish from "./pages/RecipesProducePage/Turnip/TurnipSpanish";
import ZucchiniSpanish from "./pages/RecipesProducePage/Zucchini/ZucchiniSpanish";
import Artichoke from "./pages/RecipesProducePage/Artichokes/Artichoke";
import Asparagus from "./pages/RecipesProducePage/Asparagus/Asparagus";
import Beets from "./pages/RecipesProducePage/Beets/Beets";
import BellPepper from "./pages/RecipesProducePage/BellPepper/BellPepper";
import Broccoli from "./pages/RecipesProducePage/Broccoli/Broccoli";
import BrusselSprouts from "./pages/RecipesProducePage/BrusselSprouts/BrusselSprouts";
import ButternutSquash from "./pages/RecipesProducePage/ButternutSquash/ButternutSquash";
import Cabbage from "./pages/RecipesProducePage/Cabbage/Cabbage";
import Carrot from "./pages/RecipesProducePage/Carrot/Carrot";
import Cantaloupe from "./pages/RecipesProducePage/Cantaloupe/Cantaloupe";
import Cauliflower from "./pages/RecipesProducePage/Cauliflower/Cauliflower";
import Collards from "./pages/RecipesProducePage/Collards/Collards";
import Cucumber from "./pages/RecipesProducePage/Cucumber/Cucumber";
import Eggplant from "./pages/RecipesProducePage/Eggplant/Eggplant";
import GreenPeppers from "./pages/RecipesProducePage/GreenPeppers/GreenPeppers";
import Kale from "./pages/RecipesProducePage/Kale/Kale";
import Leeks from "./pages/RecipesProducePage/Leeks/Leeks";
import Okra from "./pages/RecipesProducePage/Okra/Okra";
import Pumpkin from "./pages/RecipesProducePage/Pumpkin/Pumpkin";
import SpaghettiSuqash from "./pages/RecipesProducePage/SpaghettiSquash/SpaghettiSquash";
import SweetPotato from "./pages/RecipesProducePage/SweetPotato/SweetPotato";
import Turnip from "./pages/RecipesProducePage/Turnip/Turnip";
import Watermelon from "./pages/RecipesProducePage/Watermelon/Watermelon";
import YellowSquash from "./pages/RecipesProducePage/YellowSquash/YellowSquash";
import Zucchini from "./pages/RecipesProducePage/Zucchini/Zucchini";
import Blueberries from "./pages/RecipesProducePage/Blueberries/Blueberries";

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
        <Route
          path="exerciseVideosInEnglish"
          element={<ExerciseVideosInEnglish />}
        />
        <Route path="exercisesInSpanish" element={<ExercisesInSpanish />} />
        <Route path="balance-gait" element={<Balance />} />
        <Route path="chronicPain" element={<ChronicPain />} />
        <Route path="flexibilityTraining" element={<Flexibility />} />
        <Route path="householdResistance" element={<Household />} />
        <Route path="resistanceWBands" element={<Resistance />} />
        <Route path="seatedCardio" element={<SeatedCardio />} />
        <Route path="seatedCore" element={<SeatedCore />} />
        <Route path="totalBodyWorkout" element={<TotalBody />} />
        <Route path="yoga" element={<Yoga />} />

        <Route path="training" element={<Training />} />
        <Route path="publications" element={<Publications />} />
        <Route path="inTheNews" element={<InTheNews />} />
        <Route path="donate" element={<Donate />} />
        <Route path="getInvolved" element={<GetInvolved />} />
        <Route path="artichoke" element={<Artichoke />} />
        <Route path="asparagus" element={<Asparagus />} />
        <Route path="beets" element={<Beets />} />
        <Route path="bellpepper" element={<BellPepper />} />
        <Route path="broccoli" element={<Broccoli />} />
        <Route path="brusselsprouts" element={<BrusselSprouts />} />
        <Route path="blueberries" element={<Blueberries />} />
        <Route path="butternutsquash" element={<ButternutSquash />} />
        <Route path="cabbage" element={<Cabbage />} />
        <Route path="cantaloupe" element={<Cantaloupe />} />
        <Route path="carrot" element={<Carrot />} />
        <Route path="cauliflower" element={<Cauliflower />} />
        <Route path="collards" element={<Collards />} />
        <Route path="cucumbers" element={<Cucumber />} />
        <Route path="eggplant" element={<Eggplant />} />
        <Route path="greenpeppers" element={<GreenPeppers />} />
        <Route path="kale" element={<Kale />} />
        <Route path="leeks" element={<Leeks />} />
        <Route path="okra" element={<Okra />} />
        <Route path="pumpkin" element={<Pumpkin />} />
        <Route path="spaghettiSquash" element={<SpaghettiSuqash />} />
        <Route path="sweetPotato" element={<SweetPotato />} />
        <Route path="turnips" element={<Turnip />} />
        <Route path="watermelon" element={<Watermelon />} />
        <Route path="yellowSquash" element={<YellowSquash />} />
        <Route path="zucchini" element={<Zucchini />} />
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
