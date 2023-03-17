import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import WhiskyBox from "./containers/WhiskyBox";
import BasketBox from "./containers/BasketBox";
import { store } from "./state/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="products" element={<WhiskyBox />} />
              <Route path="basket" element={<BasketBox />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
