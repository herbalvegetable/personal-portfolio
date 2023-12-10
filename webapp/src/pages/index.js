import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/Home.module.css';

import PageContainer from 'layout/PageContainer/PageContainer';
import Handle from 'components/Handle/Handle';
import Paragraph from 'components/Paragraph/Paragraph';
import Title from 'components/Title/Title';

export default function Home() {
	return (
		<PageContainer>
			<Handle
				imgSrc={'/media/pfp01.png'}
				name={'Ben Aw Yong'}
				desc={'Developer, Creator'} />

			<Title>About Me.</Title>
			<Paragraph>
				I am passionate about fullstack web development and am always keeping up with the latest web tech trends. I have also created several personal projects involving front-end technologies such as ReactJS.
			</Paragraph>
			<Paragraph>
				I got interested in programming in Secondary 3 and taught myself how to code in JavaScript, Python and C#. Since then, I have embarked on several personal projects, such as web browser games, mobile apps, web scrapers and Discord bots.
			</Paragraph>
			<Paragraph>
				I am a hardworking, enthusiastic and confident individual. I am always willing to learn and eager to experience new things outside of my comfort zone. I am also resilient and will persevere in the face of adversity.
			</Paragraph>

			<Title>Projects</Title>

			<Title>Education</Title>
		</PageContainer>
	)
}
