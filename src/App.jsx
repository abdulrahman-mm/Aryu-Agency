import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import DigitalMarketing from "./pages/DigitalMarketing";
// import UiAndUxDesign from "./pages/UiAndUxDesign";
// import DigitalDesign from "./pages/DigitalDesign";
// import CreativeDesign from "./pages/CreativeDesign";
// import VideoProduction from "./pages/VideoProduction";
// import BrandIdentityDesign from "./pages/BrandIdentityDesign";
// import Contactus from "./pages/Contactus";
// import BrandPromotionDesign from "./pages/BrandPromotionDesign";
import { lazy } from "react";
const Home = lazy(() => import('./pages/Home'));
const BrandPromotionDesign = lazy(() => import('./pages/BrandPromotionDesign'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const UiAndUxDesign = lazy(() => import('./pages/UiAndUxDesign'));
const DigitalDesign = lazy(() => import('./pages/DigitalDesign'));
const CreativeDesign = lazy(() => import('./pages/CreativeDesign'));
const VideoProduction = lazy(() => import('./pages/VideoProduction'));
const BrandIdentityDesign = lazy(() => import('./pages/BrandIdentityDesign'));
const Contactus = lazy(() => import('./pages/Contactus'));


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="creativedesign" element={<CreativeDesign />} />
        <Route
          path="creativedesign/uianduxdesign"
          element={<UiAndUxDesign />}
        />
        <Route
          path="creativedesign/digitaldesign"
          element={<DigitalDesign />}
        />
        <Route
          path="creativedesign/brandidentitydesign"
          element={<BrandIdentityDesign />}
        />
        <Route
          path="creativedesign/brandpromotiondesign"
          element={<BrandPromotionDesign />}
        />
        <Route path="digitalmarketing" element={<DigitalMarketing />} />
        <Route path="videoproduction" element={<VideoProduction />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
