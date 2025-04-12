"use client"

import React from 'react';
import styles from "./CubeLoader.module.css"

export default function CubeLoader() {
    return (
      <div className={styles.cubeLoaderWrapper}>
       <div className={styles.cubeLoader}>
       <div className={styles.cubeTop} />
       <div className={styles.cubeWrapper}>
            <span style={{ "--i": 0 }} className={styles.cubeSpan}></span>
            <span style={{ "--i": 1 }} className={styles.cubeSpan}></span>
            <span style={{ "--i": 2 }} className={styles.cubeSpan}></span>
            <span style={{ "--i": 3 }} className={styles.cubeSpan}></span>
          </div>
        </div>
      </div>
    );
  }