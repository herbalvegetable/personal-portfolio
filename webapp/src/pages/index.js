import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/Home.module.css';

import PageContainer from 'layout/PageContainer/PageContainer';
import Handle from 'components/Handle/Handle';
import Paragraph from 'components/Paragraph/Paragraph';
import Title from 'components/Title/Title';
import Collage from 'components/Collage/Collage';
import Topic from 'components/Topic/Topic';

export default function Home() {
	return (
		<PageContainer>
			<Handle
				imgSrc={'/media/pfp03.png'}
				name={'Ben Aw Yong'}
				desc={'Developer, Creator'} />
			<Title>Hi, I'm Ben.</Title>

			<Paragraph>
				I'm passionate about full-stack web development and am always keeping up with the latest web tech trends. I've also created several personal projects involving front-end technologies such as ReactJS.
			</Paragraph>
			<Paragraph>
				My interest in programming manifested when I was Secondary 3. I taught myself how to code in several languages including JavaScript, Python and C#. Since then, I have embarked on several personal projects, such as web browser games, mobile apps, web scrapers and Discord bots.
			</Paragraph>
			<Paragraph>
				I'm a hardworking, enthusiastic and confident individual. I am always willing to learn and eager to experience new things outside of my comfort zone. I am also resilient and will persevere in the face of adversity.
			</Paragraph>

			<Title>My Projects</Title>
			<Collage collage={[
				[{src: '/media/SL02.png', caption: 'Poly Capstone Project - Gamified Learning Platform. By Students, For Students.'}],
				[
					{src: '/media/webgame01.png', caption: '2D World Generation',},
					{src: '/media/webgame02.png', caption: 'Connect Four',},
					{src: '/media/webgame03.png', caption: 'A Game of Chess',},
				],
			]}/>

			<Title>My Educational Background</Title>
			<Topic 
				title={'Ngee Ann Polytechnic'}
				lines={[
					'Diploma in Cybersecurity & Digital Forensics',
					'3.71 Cum. GPA',
					'Assistant Head of Operations of Overflow Club (Programming)'
				]}/>
			<Topic 
				title={'Marist Stella High School'}
				lines={[
					'Exco Member of the Digital Media Club (Photography, Videography)',
				]}/>

			<Title>My Skills</Title>
		</PageContainer>
	)
}
