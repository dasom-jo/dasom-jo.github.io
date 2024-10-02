"use client";
import styles from "../styles/Portfolio.module.css";


const Portfoile = () => {
  return (
    <div className={styles.frameBox}>
      {/* 프레임에 달린 줄 */}
      <div className={styles.frameLine}></div>

      {/* 프레임 이미지 */}
      <div className={styles.frameImg}>
        <h1 className={styles.frameTitle}>Portfoilo</h1>
        <div className={styles.framePortfoilos}>
          {/* 마라탕 포트포리오 */}
          <div className={styles.PortfoiloBox}>
            <div className={styles.imageCommon}>
              <div className={styles.mara}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 마라pick</p>
              <p>담당 : 개인프로젝트</p>
              <p>
                기술 : HTML, React.js, TypeScript, JavaScript, Scss, Next.js,
                MySql, recoil, GitHub
              </p>
              <p>설명 : 마라탕을 주제로한 키오스크</p>
            </div>
          </div>
          {/* 챌린지지 */}
          <div className={styles.PortfoiloBox}>
            <div className={styles.imageCommon}>
              <div className={styles.chall}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : challen.gg ver.2</p>
              <p>담당 : 프론트 50%, 전체 UI</p>
              <p>기술 : HTML, CSS-module, JavaJcript, React.JS</p>
              <p>설명 : 건강관리어플</p>
            </div>
          </div>
          {/* 어디가게 */}
          <div className={styles.PortfoiloBox}>
            <div className={styles.imageCommon}>
              <div className={styles.dog}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 어디가게</p>
              <p>담당 : openAPI,상세페이지,마이페이지</p>
              <p>
                기술 : HTML,React.JS, TypeScript, JavaScript, Next.js, Mui,
                TailWind CSS, MySQL,ReactQurey
              </p>
              <p>설명 : 동물허용가능 매장 지도</p>
            </div>
          </div>
          {/* 타이머 */}
          <div className={styles.PortfoiloBox}>
            <div className={styles.imageCommon}>
              <div className={styles.timer}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 뽀로로</p>
              <p>담당 :루틴관리 및 생성페이지</p>
              <p>기술 : HTML, CSS, TypeScript,React.JS,Tailwind CSS</p>
              <p>설명 : 타이머와 투두리스트</p>
            </div>
          </div>
          {/* 이미지카드  */}
          <div className={styles.PortfoiloBox}>
            <div className={styles.imageCommon}>
              <div className={styles.power}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 이미지카드</p>
              <p>담당 : 개인프로젝트</p>
              <p>기술 : HTML, CSS,JavaScript</p>
              <p>설명 :JS와 CSS공부를 위한 이미지 카드</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoile;
