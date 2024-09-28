"use client"
import { useRef } from "react";
import styles from "./Skill.module.css";

const Skill = () => {

  return (
    <div className={styles.frameBox}>
      <div className={styles.frameImg}>
        <div className={styles.frameLineLeft}></div>
        <div className={styles.frameLineRight}></div>
        <div className={styles.frameBom}></div>
      </div>
    </div>
  );
};

export default Skill;
