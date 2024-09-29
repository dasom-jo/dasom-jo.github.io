"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Skill.module.css";

const Skill = () => {
  const techItemRef = useRef(null);
  //스킬별 수준 설명 오픈
  const [handleDescription, setHandleDescription] = useState(false);

  const techItemClick = () => {
    techItemRef.current.classList.add(styles.activeTechItem);
  };

  return (
    <div className={styles.frameBox}>
      <div className={styles.frameImg}>
        <div className={styles.frameLineLeft}></div>
        <div className={styles.frameLineRight}></div>
        <div className={styles.frameBom}></div>
        <h1 className={styles.mySkill}>My Skill </h1>
        <div className={styles.techStack}>
          {/* 언어 */}
          <div>languages</div>
          <div className={styles.stackBox}>
          <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                alt="HTML"
              />
              <span>HTML</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                alt="CSS"
              />
              <span>CSS</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                alt="JavaScript"
              />
              <span>JavaScript</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000"
                alt="TypeScript"
              />
              <span>TypeScript</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
          </div>
          {/* 프레임워크 */}
          <div>frameworks</div>
          <div className={styles.stackBox}>
          <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                alt="React.js"
              />
              <span>React.js</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000"
                alt="Next.js"
              />
              <span>Next.js</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://w7.pngwing.com/pngs/301/171/png-transparent-node-js-javascript-software-developer-computer-icons-angularjs-others-miscellaneous-text-trademark.png"
                alt="Node.js"
              />
              <span>Node.js</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
          </div>
          {/* 라이브러리 */}
          <div>librarys</div>
          <div className={styles.stackBox}>
          <div class={styles.techItem}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6PFxvK8trITmeOdN5228XIl67eOCMYoi3g&s"
                alt="Recoil"
              />
              <span>Recoil</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000"
                alt="Redux Toolkit"
              />
              <span>Redux Toolkit</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://t1.kakaocdn.net/kakao_tech/image/2022/06/images/01.png"
                alt="React Query"
              />
              <span>React Query</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://velog.velcdn.com/images/sammy1101/post/76853fe7-409d-4562-872b-dc3e41a0150b/image.png"
                alt="SCSS"
              />
              <span>SCSS</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
                alt="TailwindCSS"
              />
              <span>TailwindCSS</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
          </div>
          {/* 그외 */}
          <div>etc</div>
          <div className={styles.stackBox}>
          <div class={styles.techItem}>
              <img
                src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
                alt="Bootstrap"
              />
              <span>Bootstrap</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24yngytUOIN7kNfMS6jqCw6D8l3rgAPJrwQ&s"
                alt="MUI"
              />
              <span>MUI</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s"
                alt="Figma"
              />
              <span>Figma</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            <div class={styles.techItem}>
              <img
                src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png"
                alt="MySQL"
              />
              <span>MySQL</span>
              {handleDescription?
                <div>어느정도합니다 이정도는 할걸요 그럴걸요???</div>
                :
                ""
              }
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
