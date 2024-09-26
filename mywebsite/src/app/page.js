// Home.js
import Animation from "./components/animation";
import Link from "next/link";
import AboutMe from "./containers/AboutMe";

const Home = () => {
  return (
    <div>
      <AboutMe />
      {/* <Link href={"https://transparent-drop-0f2.notion.site/..."}>
        <button style={{ height: "700px", backgroundColor: 'yellow', width: "700px" }}>
          포트폴리오가는 버튼
        </button>
      </Link> */}
    </div>
  );
}

export default Home;
