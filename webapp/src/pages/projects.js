import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from '@/styles/Projects.module.css';

import PageContainer from 'layout/PageContainer/PageContainer';
import Title from 'components/Title/Title';
import projectsData from './api/projects.json';

export default function ProjectsPage(props) {

    return (
        <PageContainer>
            <Title heading={1} has_underline={false}>My Projects</Title>
            <br></br>
            <div className={styles.projects}>
                {
                    projectsData.projects.map((proj, i) => {

                        let { title, desc, imgSrc } = proj;

                        return (
                            <div
                                key={i.toString()} 
                                className={styles.project}>
                                <div className={styles.img_container}>
                                    <Image
                                        width={850}
                                        height={850}
                                        src={imgSrc}
                                        className={styles.img} 
                                        alt={title}/>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.title}>
                                        {title}
                                    </div>
                                    <div className={styles.desc}>
                                        {desc}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </PageContainer>
    )
}