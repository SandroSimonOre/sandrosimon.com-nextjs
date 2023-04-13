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
            <div className={styles.projectsContainer}>
                {
                    data[language].projects.slice(0,4).map( (p, i) => (
                        
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
                                    
                                    <div className={styles.technologies}>
                                        {p.technologies.map((t, i) => <span key={i}>{t}</span>)}
                                    </div>
                                    
                                    <p>{p.overview}</p>

                                    <div className={styles.links}>
                                        
                                        {
                                            p.liveDemo ?
                                                <a className={styles.button} href={p.liveDemo} target="_blank" rel="noopener noreferrer">
                                                    {p.buttonTextDemo}
                                                </a>
                                            :
                                            null
                                        }

                                        {
                                            p.linkToRepo ?
                                            <a className={styles.button} href={p.linkToRepo} target="_blank" rel="noopener noreferrer">
                                                {p.buttonTextRepo}
                                            </a>
                                        :
                                            null
                                        }
                                    </div>
                                
                                </div>
                        </article>

                    ))
                        
                }
            </div>
            
            {/* <a href="#">More projects...</a> */}
            
            

        </section>
)}