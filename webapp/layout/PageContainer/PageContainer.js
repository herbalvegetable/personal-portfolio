import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from './PageContainer.module.css';

export default function PageContainer({ children }) {

    const router = useRouter();

    const [pageLinks, setPageLinks] = useState([
        { href: '/', title: 'Home' },
        { href: '/projects', title: 'Projects' },
    ]);

    const [links, setLinks] = useState([
        { url: '' },
    ]);

    useEffect(() => {

    }, []);

    return (
        <>
            <Head>
                <title>Ben Aw Yong - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.page_container}>

                <div className={styles.sidebar_container}>
                    <div className={styles.sidebar}>
                        <div className={styles.page_links}>
                            {
                                pageLinks.map((link, i) => {
                                    const { href, title } = link;


                                    return (
                                        <div
                                            className={styles.link}
                                            onClick={e => router.push(href)}>
                                            <div className={`${styles.active_container} ${router.pathname === href ? styles.active : ''}`}>
                                                {title}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className={styles.middle}>
                    {children}
                </div>
            </div>
        </>
    )
}