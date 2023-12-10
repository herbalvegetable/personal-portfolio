import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './Collage.module.css';

function CollageImage({ src, caption }) {

    return (
        <div className={styles.collage_img}>
            <div className={styles.img_container}>
                <Image
                    className={styles.img}
                    width={850}
                    height={850}
                    src={src} 
                    alt={caption}/>
            </div>
            <div className={styles.caption}>
                {caption}
            </div>
        </div>
    )
}

export default function Collage({ collage }) {
    /*
        imgData = {src, caption}
        collage = [
            [imgData],
            [imgData, imgData, imgData, imgData],
        ]
    */
    useEffect(() => {

    }, []);

    return (
        <div className={styles.collage}>
            {
                collage.map((imgDataList, i) => {

                    return (
                        <div
                            key={i.toString()}
                            className={`${styles.box} ${imgDataList.length > 1 ? styles.small : ''}`}>
                            {
                                imgDataList.map((imgData, i) => <CollageImage key={i.toString()} {...imgData} />)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}