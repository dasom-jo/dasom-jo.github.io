// Home.js
import AboutMe from "./containers/AboutMe";
import Contact from "./containers/Contact";
import Portfoile from "./containers/Portfoilo";
import Skill from "./containers/Skill";

const HomePage = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <div className="grid-container">
        <Contact />
        <AboutMe />
        <Skill />
        <Portfoile />
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
