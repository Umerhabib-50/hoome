import "./App.css";
import Homepage_featured from "./Components/Homepage_Featured/Homepage_featured";
import Home_case_study from "./Components/Home_case_study/Home_case_study";
import Splash from "./Components/Shahzaib/Pages/Splash/Splash";
import Hoomeworkpage from "./Components/Shahzaib/Pages/Hoomeworkpage/Hoomeworkpage";
import Contactpage from "./Components/Shahzaib/Pages/Contactpage/Contactpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home_case_study" element={<Home_case_study />} />
          <Route path="/homepage_featured" element={<Homepage_featured />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/work" element={<Hoomeworkpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
