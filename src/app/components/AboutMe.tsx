"use client";
import { useState } from "react";
import styles from "../styles/AboutMe.module.css";
import EastIcon from "@mui/icons-material/East";

const AboutMe = () => {
  const [isFlip, setIsFlip] = useState(false);
  const clickFlip = () => {
    setIsFlip(!isFlip);
  };
  return (
    <div className={styles.frameBox}>
      {/* 프레임에 달린 줄 */}
      <div className={styles.frameLine}></div>

      {/* 프레임 이미지 */}
      <div className={styles.frameImg}>
        <h1 className={styles.frameTitle}>About Me</h1>
        <div className={styles.framePhoto}></div>
        <span className={styles.frameText}>조다솜</span>
        <span className={styles.frameHash}>
          #소통 #성장 #문제해결
          <br />
          #디테일 #도전 #책임
        </span>
        <span className={styles.slogan}>성장을 갈망하는 개발자</span>
      </div>
      <div className={styles.howIWork}>
        {/* 제목 */}
        <div className={styles.howTitle}>
          <h2
            onClick={clickFlip}
            className={isFlip ? styles.gray : styles.white}
          >
            I am...
          </h2>
          <div className={styles.openBtn} onClick={clickFlip}>
            <EastIcon />
          </div>
          <h2
            onClick={clickFlip}
            className={isFlip ? styles.white : styles.gray}
          >
            how I work ?
          </h2>
        </div>

        {/* 앞면 */}
        <div className={styles.howStory}>
          {isFlip ? (
            <div className={styles.howText}>
              <p>
                목표 달성도 중요하지만{" "}
                <span className={styles.highlight}>일의 과정</span>에서 재미를
                찾는 편이에요.
              </p>
              <p>
                회사와 동료에게 긍정적 영향을 주는 일은 그 자체로{" "}
                <span className={styles.highlight}>동기부여</span>가 됩니다.
              </p>
              <p>
                <span className={styles.highlight}>문제해결에</span> 큰 성취감과
                재미를 느낍니다.
              </p>
              <p>
                <span className={styles.highlight}>함께 정한 기한</span>은
                반드시 지키려고 노력해요.
              </p>
              <p>
                <span className={styles.highlight}>파워 J 성향</span>으로
                계획대로 행동합니다.
              </p>
              <p>
                계획에 문제가 생겨도 당황하지 않는{" "}
                <span className={styles.highlight}>강한 정신력</span>의
                소유자입니다.
              </p>
            </div>
          ) : (
            <div className={styles.iAmText}>
              <p>
                저는 <span className={styles.highlight}>React</span>와
                <span className={styles.highlight}>Next.js</span>를 주력으로
                사용하는 <span className={styles.highlight}>프론트엔드 개발자</span>입니다.
                <br />
                사용자 경험을 중시하며 효율적인 UI 개발과 상태 관리에 강점을
                가지고 있습니다. 다양한 기술 스택을 활용하여 프로젝트를
                최적화하고, 팀원들과의 원활한 소통을 통해 협업을 이끌어가는
                능력이 뛰어납니다. 최신 기술을 적극적으로 도입하며 성능 개선과
                SEO 최적화에도 기여할 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
