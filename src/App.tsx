import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Card from "./pages/card/Card";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
