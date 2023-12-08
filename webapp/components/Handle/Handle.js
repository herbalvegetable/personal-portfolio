import { useReact, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './Handle.module.css';

export default function Handle({ name, imgSrc, desc }) {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.handle}>
            <div className={styles.img_container}>
                <Image 
                    className={styles.img}
                    src={imgSrc}
                    width={50}
                    height={50}
                    alt={name}/>
            </div>
            <div className={styles.text_container}>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
        </div>
    )
}