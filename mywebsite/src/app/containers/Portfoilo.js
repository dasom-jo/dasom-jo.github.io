"use client";
import { useRef, useEffect } from "react";
import styles from "./Portfolio.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Portfoile = () => {
  // const frameImgRef = useRef(null); // 프레임 이미지 ref
  // const frameLineRef = useRef(null); // 프레임 줄 ref

  // //frame 확대
  // const handleMouseEnter = () => {
  //   if (frameImgRef.current && frameLineRef.current) {
  //     frameImgRef.current.classList.add(styles.translate); // 프레임 다운 크기변동없음
  //     frameLineRef.current.classList.add(styles.translateLine); // 프레임 줄 다운 크기변동없음

  //     // scale이 끝난 후 translateY 적용()
  //     setTimeout(() => {
  //       frameImgRef.current.classList.add(styles.scale); //프레임 확대 위치변동없음
  //       frameLineRef.current.classList.add(styles.scaleLine); //프레임줄 확대 위치변동없음
  //     }, 800);
  //   } else {
  //     console.error("frameImgRef 또는 frameLineRef가 존재하지 않습니다.");
  //   }
  // };

  // //커진 frame 원상복구 시킬때
  // const handleMouseLeave = () => {
  //   if(frameImgRef.current && frameLineRef.current){
  //         // 클릭 시 scaleLeave 추가
  //   frameImgRef.current.classList.add(styles.scaleLeave); //프레임 상승 크기 크기 변동없음
  //   frameLineRef.current.classList.add(styles.translateLineLeave); //프레임 줄 상승 크기 변동없음
  //   // 애니메이션 종료 후 translateLeave 추가
  //   setTimeout(() => {
  //     frameImgRef.current.classList.remove(styles.scaleLeave);
  //     frameImgRef.current.classList.add(styles.translateLeave); //프레임 축소 위치 변동없음
  //     frameLineRef.current.classList.add(styles.scaleLineLeave); //프레임 줄 축소 위치변동 없음
  //     // 상태 초기화 (1초 후)
  //     setTimeout(() => {
  //       // 프레임에 선언되 클래스 이름 전부 초기화
  //       frameImgRef.current.classList.remove(styles.translate);
  //       frameImgRef.current.classList.remove(styles.translateLeave);
  //       frameImgRef.current.classList.remove(styles.scale);
  //       //프레임 줄에 선언되는 클래스 이름 전부 초기화
  //       frameLineRef.current.classList.remove(styles.translateLine);
  //       frameLineRef.current.classList.remove(styles.translateLineLeave);
  //       frameLineRef.current.classList.remove(styles.scaleLine);
  //       frameLineRef.current.classList.remove(styles.scaleLineLeave);
  //     }, 800);
  //   }, 800);
  //   }else {
  //     console.warn("에러");
  //   }
  // };

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
            <div class={styles.imageCommon}>
              <div class={styles.mara}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 마라pick</p>
              <p>담당 : 개인프로젝트</p>
              <p>기술 : HTML, React.js, TypeScript, JavaScript, Scss, Next.js, MySql, recoil, GitHub</p>
              <p>설명 : 마라탕을 주제로한 키오스크</p>
            </div>
          </div>
          {/* 챌린지지 */}
          <div className={styles.PortfoiloBox}>
            <div class={styles.imageCommon}>
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
            <div class={styles.imageCommon}>
              <div className={styles.dog}></div>
            </div>
            <div className={styles.framePortfoiloText}>
              <p>제목 : 어디가게</p>
              <p>담당 : openAPI,상세페이지,마이페이지</p>
              <p>기술 : HTML,React.JS, TypeScript, JavaScript, Next.js, Mui, TailWind CSS, MySQL,ReactQurey</p>
              <p>설명 : 동물허용가능 매장 지도</p>
            </div>
          </div>
          {/* 타이머 */}
          <div className={styles.PortfoiloBox}>
            <div class={styles.imageCommon}>
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
            <div class={styles.imageCommon}>
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
