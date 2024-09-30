"use client";
import styles from "./AboutMe.module.css";


const AboutMe = () => {
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
        {/* <div className={styles.open}>
          <ArrowDownwardIcon/>
        </div> */}
        <div className={styles.howIWork}>
          <h2 className={styles.howTitle}>how I work ?</h2>
          <div  className={styles.howStory}>
            <p>목표 달성도 중요하지만 <span className={styles.highlight}>일의 과정</span>에서 재미를 찾는 편이에요.</p>
            <p>
              회사와 동료에게 긍정적 영향을 주는 일은 그 자체로  <span className={styles.highlight}>동기부여</span>가
              됩니다.
            </p>
            <p><span className={styles.highlight}>문제해결에</span> 큰 성취감과 재미를 느낍니다.</p>
            <p><span className={styles.highlight}>함께 정한 기한</span>은 반드시 지키려고 노력해요.</p>
            <p><span className={styles.highlight}>파워 J 성향</span>으로 계획대로 행동합니다.</p>
            <p>
              계획에 문제가 생겨도 당황하지 않는 <span className={styles.highlight}>강한 정신력</span>의 소유자입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
