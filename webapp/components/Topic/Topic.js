import { useState, useEffect, useRef } from 'react';

import styles from './Topic.module.css';

export default function Topic({ title, lines }) {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.topic}>
            <div className={styles.title}>
                <div className={styles.bullet}></div>
                <div className={styles.text}>{title}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.divider}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.lines_container}>
                    {
                        lines.map((line, i) => {

                            return (
                                <div
                                    key={i.toString()} 
                                    className={styles.line}>
                                    {line}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}