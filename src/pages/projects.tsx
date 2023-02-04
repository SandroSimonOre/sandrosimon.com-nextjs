import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import styles from '../styles/ProjectsPage.module.scss'
import { projectsLanguage } from '@/data/portfolioData';

export default function Projects() {

    
    const { language } = useContext(LanguageContext) as LanguageContextType

    return (
        <div className={styles.projects}>
            <h1>{projectsLanguage[language].title}</h1>
            {
                projectsLanguage[language].projects.map((project, idx) => (
                    <div key={idx} className={styles.projectCard}>
                        <div className={styles.mediaContainer}>
                            {
                                project.mediaType === "video" && (
                                    <div><h2>Video</h2></div>
                                )
                            }
                            {
                                project.mediaType === "image" && (
                                    <div><h2>Imagen</h2></div>
                                )
                            }
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.titleContainer}>
                                {project.title}
                            </div>
                            <div className={styles.overviewContainer}>
                                {project.overview}
                            </div>
                            <div className={styles.technologiesContainer}>
                                {
                                    project.technologies.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))
                                }
                            </div>
                            <div className={styles.buttonContainer}>
                                
                                {/* <a href='#'>Live Demo -&gt;</a> */}
                                <a href='#'>Live Demo</a>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}