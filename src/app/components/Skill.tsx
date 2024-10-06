import styles from "../styles/Skill.module.css";
import Image from "next/image";

const Skill = () => {
  return (
    <div className={styles.frameBox}>
      <div className={styles.leftRebar}></div>
      <div className={styles.frameImg}>
        <div className={styles.frameLineLeft}></div>
        <div className={styles.frameLineRight}></div>
        <div className={styles.frameBom}></div>
        <h1 className={styles.mySkill}>My Skill </h1>
        <div className={styles.techStack}>
          {/* 언어 */}
          <div className={styles.title}>languages</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              <Image
                src="/images/HTML.png"
                alt="HTML"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>HTML</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/CSS.svg"
                alt="CSS"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>CSS</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/JavaScript.png"
                alt="JavaScript"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>JavaScript</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/typescript.svg"
                alt="TypeScript"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>TypeScript</span>
            </div>
          </div>
          {/* 프레임워크 */}
          <div className={styles.title}>frameworks</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              <Image
                src="/images/React.png"
                alt="React.js"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>React.js</span>
            </div>
            <div className={styles.techItem}>
              <Image
                style={{ backgroundColor: "white" }}
                src="/images/Next.png"
                alt="Next.js"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>Next.js</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/Node.webp"
                alt="Node.js"
                width={30}
                height={40}
                className={styles.roundImage}
                style={{ backgroundColor: "white" }}
              />
              <span>Node.js</span>
            </div>
          </div>
          {/* 라이브러리 */}
          <div className={styles.title}>librarys</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              <Image
                src="/images/React Query.png"
                alt="React Query"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>React Query</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/Recoil.png"
                alt="Recoil"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>Recoil</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/Redux Toolkit.png"
                alt="Redux Toolkit"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>Redux Toolkit</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/SCSS.png"
                alt="SCSS"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>SCSS</span>
            </div>
            <div className={styles.techItem}>
              <Image
                src="/images/TailwindCSS.png"
                alt="TailwindCSS"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>TailwindCSS</span>
            </div>
          </div>
          {/* 그외 */}
          <div className={styles.title}>etc</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              <Image
                src="/images/Figma.png"
                alt="Figma"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>Figma</span>
            </div>
            <div className={styles.techItem}>
              <Image
                style={{ backgroundColor: "white" }}
                src="/images/MySQL.svg"
                alt="MySQL"
                width={30}
                height={40}
                className={styles.roundImage}
              />
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
