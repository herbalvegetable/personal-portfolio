import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/Home.module.css';

import PageContainer from 'layout/PageContainer/PageContainer';
import Handle from 'components/Handle/Handle';

export default function Home() {
	return (
		<PageContainer>
			<Handle 
				imgSrc={'/media/pfp01.png'}
				name={'Ben Aw Yong'}
				desc={'Developer, Creator'}/>
		</PageContainer>
  	)
}
