import Image from "next/image"
import { skillsLanguage as data } from "../data/languageData"
import styles from '../styles/Skills.module.scss'
// import { useStore } from '@nanostores/react';
// import { lang } from '../store/language';

export default function Skills() {
	const skills = [
		{ icon: "/assets/images/skills-js.svg", skillTitle: 'JavaScript' },
		{ icon: "/assets/images/skills-sass.png", skillTitle: 'Sass' },
		{ icon: "/assets/images/skills-reactjs.svg", skillTitle: 'React. js'}, 
		{ icon: "/assets/images/skills-nodejs.svg", skillTitle:  'Node. js'}, 
		{ icon: "/assets/images/skills-expressjs.svg", skillTitle: 'Express' },
		{ icon: "/assets/images/skills-nextjs.svg", skillTitle:  'Next' },
		{ icon: "/assets/images/skills-postgresql.png", skillTitle: 'PostgreSQL' },
		{ icon: "/assets/images/skills-mysql.svg", skillTitle: 'MySQL' },
		{ icon: "/assets/images/skills-mongodb.svg", skillTitle: 'MongoDB' },
		{ icon: "/assets/images/skills-git.svg", skillTitle: 'Git' },
		{ icon: "/assets/images/skills-docker.webp", skillTitle: 'Docker' },
		{ icon: "/assets/images/skills-aws.png", skillTitle: 'Amazon  WS'}
	]

	const $lang = 'eng' //useStore(lang);

	return (

		<section className={styles.skills}>
			<h2>{data[$lang].title}</h2>
			<div className={styles.skillsContainer}>
	
				{
					skills.map( (s, i) => (
					<div className={styles.skillCard} key={i}>
						<Image 
							src={s.icon}
							width={500}
							height={500} 
							alt="" 
						/>
						<span>{s.skillTitle}</span>
					</div>
					))
				}
				
			</div>
			
	</section>
	
	
	)
	
}