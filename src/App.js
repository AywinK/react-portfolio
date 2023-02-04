import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {

  const bodyBSStyles = "container";

  return (
    <div className={bodyBSStyles}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
