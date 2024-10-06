import styles from "../styles/Skill.module.css";

const Skill = () => {


  return (
    <div className={styles.frameBox}>
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
              {/* <Image
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpassauer1083.tistory.com%2F5&psig=AOvVaw3BBLTouQSdWAsAw51t--8U&ust=1727949666813000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj5zKK474gDFQAAAAAdAAAAABAV"
                alt="HTML"
                width={30}
                height={40}
              /> */}
              <span>HTML</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="CSS"
                width={30}
                height={40}
              /> */}
              <span>CSS</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OrtM7FfDgFfgOmRqL4R__bU5cjx1ltwy1A&s"
                alt="JavaScript"
                width={30}
                height={40}
              /> */}
              <span>JavaScript</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://i.namu.wiki/i/EY559r31H-um8uTtptPIbCZoBGxsumSlwEH0T_rA6WmxQq1UwqyAf3cJQJXN7Fv5CoEz0kv5CBXzjkkPU_XWig.svg"
                alt="TypeScript"
                width={30}
                height={40}
              /> */}
              <span>TypeScript</span>
            </div>
          </div>
          {/* 프레임워크 */}
          <div className={styles.title}>frameworks</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                alt="React.js"
                width={30}
                height={40}
              /> */}
              <span>React.js</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://images.velog.io/images/kim98111/post/59b25b73-7c6c-4820-83f5-c3107dfd97a2/nextjs.png"
                alt="Next.js"
                width={30}
                height={40}
              /> */}
              <span>Next.js</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="Node.js"
                width={30}
                height={40}
              /> */}
              <span>Node.js</span>
            </div>
          </div>
          {/* 라이브러리 */}
          <div className={styles.title}>librarys</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtnECm8smWidVc32jR2bcuqczp64NhvzqfQ&s"
                alt="Recoil"
                width={30}
                height={40}
              /> */}
              <span>Recoil</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ROtPTdQZE4JWt3wKm5q2GmpDKcRJ4C1gaA&s"
                alt="Redux Toolkit"
                width={30}
                height={40}
              /> */}
              <span>Redux Toolkit</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://t1.kakaocdn.net/kakao_tech/image/2022/06/images/01.png"
                alt="React Query"
                width={30}
                height={40}
              /> */}
              <span>React Query</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://velog.velcdn.com/images/hahahaday12/post/832ea253-9ec6-47c8-b5bc-0c94039f0a2a/image.webp"
                alt="SCSS"
                width={30}
                height={40}
              /> */}
              <span>SCSS</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://velog.velcdn.com/images/jisoung/post/f40ccc5a-968b-4889-826f-13b06bb469ac/image.jpeg"
                alt="TailwindCSS"
                width={30}
                height={40}
              /> */}
              <span>TailwindCSS</span>
            </div>
          </div>
          {/* 그외 */}
          <div className={styles.title}>etc</div>
          <div className={styles.stackBox}>
            <div className={styles.techItem}>
              {/* <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="Bootstrap"
                width={30}
                height={40}
              /> */}
              <span>Bootstrap</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwbRH8dZHkXXXbZAowG0UA2_jDH9cnQ0fjQ&s"
                alt="MUI"
                width={30}
                height={40}
              /> */}
              <span>MUI</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s"
                alt="Figma"
                width={30}
                height={40}
              /> */}
              <span>Figma</span>
            </div>
            <div className={styles.techItem}>
              {/* <Image
                src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png"
                alt="MySQL"
                width={30}
                height={40}
              /> */}
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
