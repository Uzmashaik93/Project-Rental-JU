import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ItemDetail from "./pages/CardDetailPage";
import ListAppartments from "./components/HomePage";
import CreateNewListing from "./pages/CreateNewListing";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { results } from "./data/aparments.json";

function App() {
  const [resultList, setResultList] = useState(results);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element=<ListAppartments
            resultList={resultList}
            setResultList={setResultList}
          />
        />
        <Route
          path="/apartmentdetails/:listId"
          element=<ItemDetail apartmentsList={resultList} />
        />
        <Route
          path="/CreateNewListing"
          element=<CreateNewListing
            resultList={resultList}
            setResultList={setResultList}
          />
        />
        <Route path="/About" element=<About /> />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
