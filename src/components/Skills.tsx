import Image from "next/image"
import styles from '../styles/Skills.module.scss'

export const Skills = () => {
	const skills = [
		
		{ icon: "/assets/images/skills-postgresql.png", skillTitle: 'PostgreSQL' },
		{ icon: "/assets/images/skills-mysql.svg", skillTitle: 'MySQL' },
		{ icon: "/assets/images/skills-aws.png", skillTitle: 'AWS'},
		{ icon: "/assets/images/skills-python.svg", skillTitle: 'Python' }
	]


	return (

		<section className={styles.skills}>
			<h2>Titulo</h2>
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