import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import WhiskyBox from "./containers/WhiskyBox";
import BasketBox from "./containers/BasketBox";
import BasketContext from "./context/BasketContext";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <Router>
        <BasketContext.Provider value={[basket, setBasket]}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<WhiskyBox />} />
            <Route path="basket" element={<BasketBox />} />
          </Routes>
        </BasketContext.Provider>
      </Router>
    </div>
  );
}

export default App;
