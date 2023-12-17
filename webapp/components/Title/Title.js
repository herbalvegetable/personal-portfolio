import { useState, useEffect, useRef } from 'react';

import styles from './Title.module.css';

export default function Title({ children, heading, has_underline=true, }) {

    useEffect(() => {

    }, []);

    const HEADING_STYLES = {
        1: styles.one,
        2: styles.two,
        3: styles.three,
    }

    return (
        <div className={`${styles.title} ${HEADING_STYLES[heading]}`}>
            <div className={`${styles.text} ${has_underline ? styles.small_spacing : ''}`}>{children}</div>
            {has_underline && <div className={styles.underline}></div>}
        </div>
    )
}