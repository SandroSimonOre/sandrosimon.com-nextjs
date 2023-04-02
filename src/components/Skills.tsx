import Image from "next/image"
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import { skillsLanguage as data } from "../data/languageData"
import styles from '../styles/Skills.module.scss'

export const Skills = () => {
	const skills = [
		{ icon: "/assets/images/skills-typescript.svg", skillTitle: 'TypeScript' },
		{ icon: "/assets/images/skills-reactjs.svg", skillTitle: 'React.js'}, 
		{ icon: "/assets/images/skills-nextjs.svg", skillTitle:  'Next.js' },
		{ icon: "/assets/images/skills-nodejs.svg", skillTitle:  'Node.js'}, 
		{ icon: "/assets/images/skills-postgresql.png", skillTitle: 'PostgreSQL' },
		{ icon: "/assets/images/skills-mysql.svg", skillTitle: 'MySQL' },
		{ icon: "/assets/images/skills-mongodb.svg", skillTitle: 'MongoDB' },
		{ icon: "/assets/images/skills-git.svg", skillTitle: 'Git' },
		{ icon: "/assets/images/skills-docker.webp", skillTitle: 'Docker' },
		{ icon: "/assets/images/skills-aws.png", skillTitle: 'AWS'},
		{ icon: "/assets/images/skills-kubernetes.svg", skillTitle: 'Kubernetes' },
		{ icon: "/assets/images/skills-python.svg", skillTitle: 'Python' }
	]

	const { language } = useContext(LanguageContext) as LanguageContextType

	return (

		<section className={styles.skills}>
			<h2>{data[language].title}</h2>
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