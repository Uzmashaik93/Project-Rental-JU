import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListAppartments from "./components/ListAppartments";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <ListAppartments />
      </div>
      <Footer />
    </>
  );
}

export default App;
