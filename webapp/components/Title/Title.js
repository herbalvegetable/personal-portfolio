import { useState, useEffect, useRef } from 'react';

import styles from './Title.module.css';

export default function Title({ children }) {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.title}>
            <div className={styles.text}>{children}</div>
            <div className={styles.underline}></div>
        </div>
    )
}