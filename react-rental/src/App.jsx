import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ItemDetail from "./pages/ItemDetailPage";
import ListAppartments from "./components/ListAppartments";
import { Routes, Route } from "react-router-dom";
import { results } from "./data/aparments.json";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element=<ListAppartments results={results} /> />
        <Route
          path="/apartmentdetails/:listId"
          element=<ItemDetail apartmentsList={results} />
        />
        <Route path="/About" element=<About /> />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
