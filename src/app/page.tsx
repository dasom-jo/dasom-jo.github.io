// Home.js

import Head from "next/head";  // Head 컴포넌트 가져오기
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfoile from "./components/Portfoilo";
import Skill from "./components/Skill";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="조다솜의 홈페이지입니다" />
        <meta name="keywords" content="웹사이트, HTML, 메타데이터" />
        <meta name="author" content="조다솜" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>jodasom</title>
      </Head>
      <div className="grid-container">
        <Contact />
        <AboutMe />
        <Skill />
        <Portfoile />
      </div>
    </>
  );
};

export default HomePage;
