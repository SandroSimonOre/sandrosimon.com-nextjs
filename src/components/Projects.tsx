import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import { projectsLanguage as data } from '../data/languageData';
import styles from '../styles/Projects.module.scss'

export const Projects = () => {
   
    const { language } = useContext(LanguageContext) as LanguageContextType
    
    return (
        <section id='projects' className={styles.projects}>
                
            <h2>{data[language].title}</h2>

            {
                data[language].projects.map( (p, i) => (
                    
                    <article className={styles.project} key={i}>
                
                            <div className={styles.screenshot}>
                                <Image 
                                    src={p.urlImage}
                                    width={800}
                                    height={300} 
                                    alt="" 
                                />
                            </div>
                            <div className={styles.overview}>
                                <h4>{p.title}</h4>
                                <br />
                                <p>{p.overview}</p>
                                
                                <br />
                                <span>{data[language].technologiesTitle}</span>
                                
                                <p>{p.technologies}</p>

                                <br />
                                <div className={styles.buttonsContainer}>
                                    { 
                                        p.liveDemo && <a className={styles.button} href={p.liveDemo} target="_blank" rel="noopener noreferrer">
                                            {data[language].buttonTextDemo}
                                        </a> 
                                    }
                                    { 
                                        p.linkToRepo && <a className={styles.button} href={p.linkToRepo} target="_blank" rel="noopener noreferrer">
                                            {data[language].buttonTextRepo}
                                        </a> 
                                    }
                                </div>
                            
                            </div>
                    </article>

                ))
                    
            }

    </section>
)}