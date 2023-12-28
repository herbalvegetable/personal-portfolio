import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/Home.module.css';

import PageContainer from 'layout/PageContainer/PageContainer';
import Handle from 'components/Handle/Handle';
import Paragraph from 'components/Paragraph/Paragraph';
import Title from 'components/Title/Title';
import Collage from 'components/Collage/Collage';
import Topic from 'components/Topic/Topic';
import List from 'components/List/List';

import projectsData from './api/projects.json';

export default function Home() {
	const [collage, setCollage] = useState([]);

	useEffect(() => {
		console.log(projectsData);

		// show first 4 projects
		let collageList = projectsData.projects.slice(0, 4).map(proj => {
			let { imgSrc: src, caption } = proj;
			return [{ src, caption }];
		});

		setCollage(collageList);
	}, []);

	return (
		<PageContainer>
			<Handle
				imgSrc={'/media/pfp03.png'}
				name={'Ben Aw Yong'}
				desc={'Developer, Creator'} />
			<Title>Hi, I'm Ben.</Title>
			<br />

			<Paragraph>
				I'm passionate about full-stack web development and am always keeping up with the latest web tech trends. I've also created several personal projects involving front-end technologies such as ReactJS.
			</Paragraph>
			<Paragraph>
				My interest in programming manifested when I was Secondary 3. I taught myself how to code in several languages including JavaScript, Python and C#. Since then, I have embarked on several personal projects, such as web browser games, mobile apps, web scrapers and Discord bots.
			</Paragraph>
			<Paragraph>
				I'm a hardworking, enthusiastic and confident individual. I am always willing to learn and eager to experience new things outside of my comfort zone. I am also resilient and will persevere in the face of adversity.
			</Paragraph>

			<br />

			<Title>My Top Projects</Title>
			<br />
			<Collage collage={collage} />

			<br />

			<Title>My Educational Background</Title>
			<br />
			<Topic
				title={'Ngee Ann Polytechnic'}
				lines={[
					'Diploma in Cybersecurity & Digital Forensics',
					'3.71 Cum. GPA',
					'Assistant Head of Operations of Overflow Club (Programming)'
				]} />
			<Topic
				title={'Marist Stella High School'}
				lines={[
					'Exco Member of the Digital Media Club (Photography, Videography)',
				]} />

			<br />

			<Title>My Skills</Title>
			<br />

			<Title heading={2} has_underline={false}>Technologies</Title>
			<List listItems={[
				{ title: 'Python', desc: '' },
				{ title: 'HTML5', desc: '' },
				{ title: 'CSS', desc: '' },
				{ title: 'JavaScript', desc: '' },
				{ title: 'NodeJS', desc: '' },
				{ title: 'C#', desc: '' },
				{ title: 'ReactJS', desc: '' },
				{ title: 'React Native', desc: '' },
			]} />

			<br />

			<Title heading={2} has_underline={false}>Values</Title>
			<List listItems={[
				{ title: 'Communication', desc: '' },
				{ title: 'Teamwork', desc: '' },
				{ title: 'Open-mindedness', desc: '' },
				{ title: 'Perspective', desc: '' },
				{ title: 'Decisiveness', desc: '' },
				{ title: 'Critical Thinking', desc: '' },
				{ title: 'Decision Making', desc: '' },
				{ title: 'Outspoken', desc: '' },
			]} />

			<br />
		</PageContainer>
	)
}
