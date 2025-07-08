import { useState, useEffect } from "react";
import "./App.css";
import LoadingComponent from "./components/Loading/Loading";
import NavbarComponent from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/Home";
import AboutMeComponent from "./components/AboutMe/AboutMe";
import SkillsComponent from "./components/Skills/Skills";
import ProjectsComponent from "./components/Projects/Projects";
import ContactComponent from "./components/Contact/Contact";
import FooterComponent from "./components/Footer/Footer";
import BackgroundComponent from "./components/Background/Background";

function App() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado de carga a false después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
        <BackgroundComponent/>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <NavbarComponent/>
          <HomeComponent />
          <AboutMeComponent />
          <SkillsComponent />
          <ProjectsComponent />
          <ContactComponent />
          <FooterComponent />
        </>
      )}
    </>
  );
}

export default App;
