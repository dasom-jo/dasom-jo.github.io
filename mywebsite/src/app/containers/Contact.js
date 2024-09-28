"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const clickFrameRef = useRef(null);
  const clickFrameLineRef = useRef(null);
  const clickTextRef = useRef(null);
  // 프레임 클릭시
  const handleFrame = () => {
    clickFrameRef.current.classList.add(styles.clickFrame); //프레임 하강
    clickFrameLineRef.current.classList.add(styles.clickFrameLine); //프레임줄 하강
    clickTextRef.current.classList.add(styles.clickFrameText); //텍스트 위치변경
    setIsFrameClicked(true); //닫기버튼 등장
  };
  //닫기버튼
  const [isFrameClicked, setIsFrameClicked] = useState(false);

  const handleFrameClose = () => {
    clickFrameRef.current.classList.remove(styles.clickFrame); //프레임 원상복귀
    clickFrameLineRef.current.classList.remove(styles.clickFrameLine); //프레임줄 원상복귀
    clickTextRef.current.classList.remove(styles.clickFrameText); //텍스트 위치 원상복귀
    setIsFrameClicked(false); //닫기버튼 제거
  };

  // 클릭 이벤트로 닫기 버튼을 제어
  const handleClose = (event) => {
    event.stopPropagation(); // 부모 요소의 클릭 이벤트를 차단
    handleFrameClose(); // 프레임 닫기 처리
  };

  return (
    // 전체
    <div className={styles.contactBox}>
      {/* 프레임 줄 */}
      <div className={styles.contactFrameLine} ref={clickFrameLineRef}></div>
      {/* 프레임 */}
      <div
        ref={clickFrameRef}
        className={styles.contactFrameImg}
        onClick={handleFrame}
      >
        {/* 프레임 내부 연락처 텍스트 */}
        <div className={styles.contactAddr} ref={clickTextRef}>
          <p>
            깃 허브 :{" "}
            <a href="https://github.com/dasom-jo" target="_blank">
              https://github.com/dasom-jo
            </a>
          </p>
          <p>
            노션 :{" "}
            <a
              href="https://transparent-drop-0f2.notion.site/I-m-a-front-end-developer-10c28716df6680f9b8b4d682d02d8f67"
              target="_blank"
            >
              I-m-a-front-end-developer
            </a>
          </p>
          <p>
            전화 번호 : <a href="tel:+821044565247">010-4456-5247</a>
          </p>
          <p>
            메일 :{" "}
            <a href="mailto:jodasom0216@gmail.com">jodasom0216@gmail.com</a>
          </p>
          <p>
            블로그 :{" "}
            <a href="https://github.com/dasom-jo">jodasom0216@gmail.com</a>
          </p>
        </div>
        <div className={styles.contactBtn}>CONTACT CLICK!</div>
        {isFrameClicked ? (
          <div className={styles.closeBtn} onClick={handleClose}>
            &lt;FRAME UP/&gt;
          </div>
        ) : (
          <div className={styles.closeBtn}>&lt;DOWN/&gt;</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
