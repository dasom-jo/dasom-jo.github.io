// Home.js
import AboutMe from "./containers/AboutMe";
import Contact from "./containers/Contact";
import Portfoile from "./containers/Portfoilo";
import Skill from "./containers/Skill";

const HomePage = () => {
  return (
    <div className="grid-container">
      <Contact/>
      <AboutMe />
      <Skill/>
      <Portfoile/>
    </div>
  );
}

export default HomePage;
