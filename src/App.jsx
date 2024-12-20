import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import UiAndUxDesign from "./pages/UiAndUxDesign";
import DigitalDesign from "./pages/DigitalDesign";
import CreativeDesign from "./pages/CreativeDesign";
import VideoProduction from "./pages/VideoProduction";
import BrandIdentityDesign from "./pages/BrandIdentityDesign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="digitalmarketing" element={<DigitalMarketing />} />
        <Route path="uianduxdesign" element={<UiAndUxDesign />} />
        <Route path="digitaldesign" element={<DigitalDesign />} />
        <Route path="creativedesign" element={<CreativeDesign />} />
        <Route path="videoproduction" element={<VideoProduction />} />
        <Route path="brandidentitydesign" element={<BrandIdentityDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
