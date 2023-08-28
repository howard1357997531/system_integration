import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/nav/Navbar";
import AdvertiseScreen from "./component/screen/AdvertiseScreen";
import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar scroll={scroll}></Navbar>
        <Routes>
          <Route path="/" element={<AdvertiseScreen scroll={scroll} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
