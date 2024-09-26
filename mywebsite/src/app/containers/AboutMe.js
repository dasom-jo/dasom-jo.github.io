"use client";
import { useRef } from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    const frameImgRef = useRef(null);

    const handleMouseEnter = () => {
        // frame hover 하여 크기를 키울때
        frameImgRef.current.classList.add(styles.translate);
        // scale이 끝난후 translateY 적용
        setTimeout(() => {
            frameImgRef.current.classList.add(styles.scale);
        }, 1000);
    };

    const handleMouseLeave = () => {
        //커진 frame 원상복구 시킬때
        // 클릭 시 scaleLeave 추가
        frameImgRef.current.classList.add(styles.scaleLeave);

        // 애니메이션 종료 후 translateLeave 추가
        setTimeout(() => {
            frameImgRef.current.classList.remove(styles.scaleLeave);
            frameImgRef.current.classList.add(styles.translateLeave);

            // 상태 초기화 (1초 후)
            setTimeout(() => {
                frameImgRef.current.classList.remove(styles.translate);
                frameImgRef.current.classList.remove(styles.translateLeave);
                frameImgRef.current.classList.remove(styles.scale);
            }, 800);
        }, 800);
    };
    return (
        // 프레임에 달린 줄
        <div className={styles.frameLine}>
        {/* 프레임 이미지 */}
        <div
            className={styles.frameImg}
            ref={frameImgRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        </div>
        </div>
    );
};

export default AboutMe;
