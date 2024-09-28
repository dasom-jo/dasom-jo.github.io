// Home.js
import Animation from "./components/animation";
import Link from "next/link";
import AboutMe from "./containers/AboutMe";
import Contact from "./containers/Contact";
import Skill from "./containers/Skill";

const Home = () => {
  return (
    <div className="grid-container">
      <Contact/>
      <AboutMe />
      <Skill/>
    </div>
  );
}

export default Home;
