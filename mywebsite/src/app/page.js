//메인페이지
import Animation from "./components/animation";
import AboutMe from "./pages/api/about-me";
//link
import Link from "next/link"
export default function Home() {
  return (
    <div>
      메인페이지
      <Animation/>
      <Link href={"https://transparent-drop-0f2.notion.site/fff28716df668194b23af3f9642f9738?v=fff28716df66811f832f000c0ace1204&pvs=4"}>
      <button>포트폴리오가는 버튼</button>
      </Link>
    </div>
  );
}
