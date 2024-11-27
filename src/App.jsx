import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="digitalmarketing" element={<DigitalMarketing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
