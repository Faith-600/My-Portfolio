import Home from "./Component/Home";
import About from "./Component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from "./Component/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
