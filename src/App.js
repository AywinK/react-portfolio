import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectData from "./components/ProjectData.json";
import ProjectPage from './components/ProjectPage';
import DummyHeader from './components/DummyHeader';
import PageNotFound from './components/PageNotFound';



function App() {



  return (
    <div>
      <Header />
      <DummyHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />

        {ProjectData.data.map((projectObj, index) => {
          return (
            <Route key={index} path={`/Projects/${projectObj.title}`} element={<ProjectPage projectObj={projectObj} />} />
          )
        })}

        <Route path='*' element={<PageNotFound />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
