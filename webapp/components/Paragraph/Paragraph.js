import { useState, useEffect, useRef } from 'react';

import styles from './Paragraph.module.css';

export default function Paragraph({ children }) {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.paragraph}>
            {children}
        </div>
    )
}