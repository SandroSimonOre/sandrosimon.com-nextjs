// import { useStore } from '@nanostores/react';
// import { lang } from '../store/language';
import Image from 'next/image';
import { projectsLanguage as data } from '../data/languageData';
import styles from '../styles/Projects.module.scss'

export default function Projects() {
   
    const $lang = 'eng' //useStore(lang);
    
    return (
        <section id='projects' className={styles.projects}>
                
            <h2>{data[$lang].title}</h2>

            {
                data[$lang].projects.map( (p, i) => (
                    
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
                                <span>{data[$lang].technologiesTitle}</span>
                                
                                <p>{p.technologies}</p>

                                <br />
                                <div className={styles.buttonsContainer}>
                                    { 
                                        p.liveDemo && <a className={styles.button} href={p.liveDemo} target="_blank" rel="noopener noreferrer">
                                            {data[$lang].buttonTextDemo}
                                        </a> 
                                    }
                                    { 
                                        p.linkToRepo && <a className={styles.button} href={p.linkToRepo} target="_blank" rel="noopener noreferrer">
                                            {data[$lang].buttonTextRepo}
                                        </a> 
                                    }
                                </div>
                            
                            </div>
                    </article>

                ))
                    
            }

    </section>
)}