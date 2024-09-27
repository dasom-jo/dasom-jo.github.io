"use client"
import { useRef, useEffect } from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const frameImgRef = useRef(null); // 프레임 이미지 ref
  const frameLineRef = useRef(null); // 프레임 줄 ref

  //frame 확대
  const handleMouseEnter = () => {
    if (frameImgRef.current && frameLineRef.current) {
      frameImgRef.current.classList.add(styles.translate); // 프레임 다운 크기변동없음
      frameLineRef.current.classList.add(styles.translateLine); // 프레임 줄 다운 크기변동없음

      // scale이 끝난 후 translateY 적용()
      setTimeout(() => {
        frameImgRef.current.classList.add(styles.scale); //프레임 확대 위치변동없음
        frameLineRef.current.classList.add(styles.scaleLine)//프레임줄 확대 위치변동없음
      }, 800);
    } else { 
      console.error("frameImgRef 또는 frameLineRef가 존재하지 않습니다.");
    }
  };

  //커진 frame 원상복구 시킬때
  const handleMouseLeave = () => {
    // 클릭 시 scaleLeave 추가
    frameImgRef.current.classList.add(styles.scaleLeave);//프레임 상승 크기 크기 변동없음
    frameLineRef.current.classList.add(styles.translateLineLeave); //프레임 줄 상승 크기 변동없음
    // 애니메이션 종료 후 translateLeave 추가
    setTimeout(() => {
        frameImgRef.current.classList.remove(styles.scaleLeave);
        frameImgRef.current.classList.add(styles.translateLeave); //프레임 축소 위치 변동없음
        frameLineRef.current.classList.add(styles.scaleLineLeave) //프레임 줄 축소 위치변동 없음
        // 상태 초기화 (1초 후)
        setTimeout(() => {
          // 프레임에 선언되 클래스 이름 전부 초기화
          frameImgRef.current.classList.remove(styles.translate);
          frameImgRef.current.classList.remove(styles.translateLeave);
          frameImgRef.current.classList.remove(styles.scale);
          //프레임 줄에 선언되는 클래스 이름 전부 초기화
          frameLineRef.current.classList.remove(styles.translateLine);
          frameLineRef.current.classList.remove(styles.translateLineLeave);
          frameLineRef.current.classList.remove(styles.scaleLine);
          frameLineRef.current.classList.remove(styles.scaleLineLeave);
        }, 800);
    }, 800);
  };

  return (
    <div className={styles.frameBox}>
      {/* 프레임에 달린 줄 */}
      <div
        className={styles.frameLine}
        ref={frameLineRef} // 프레임 줄 ref 연결
      ></div>

      {/* 프레임 이미지 */}
      <div
        className={styles.frameImg}
        ref={frameImgRef} // 프레임 이미지 ref 연결
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.framePhoto}></div>
        <span className={styles.frameText}>
          조다솜
        </span>
        <span className={styles.frameHash}>
          #열정 #협업 #성장갈망<br/>
          #강한 경기도인 #파워 J
        </span>
        <sapn className={styles.slogan}>"성장을 갈망하는 개발자"</sapn>
      </div>
    </div>
  );
};

export default AboutMe;
