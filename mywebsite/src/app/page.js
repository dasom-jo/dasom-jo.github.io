// Home.js
import Animation from "./components/animation";
import Link from "next/link";
import AboutMe from "./containers/AboutMe";
import Contact from "./containers/Contact";

const Home = () => {
  return (
    <div className="grid-container">
      <Contact/>
      <AboutMe />
    </div>
  );
}

export default Home;
