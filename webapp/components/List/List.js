import { useState, useEffect, useRef } from 'react';

import styles from './List.module.css';

function Box({ title, desc }) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    )
}

export default function List({ listItems }) {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.grid}>
            {
                listItems.map((item, i) => {
                    const { title, desc } = item;
                    return <Box key={i.toString()} {...item} />
                })
            }
        </div>
    )
}