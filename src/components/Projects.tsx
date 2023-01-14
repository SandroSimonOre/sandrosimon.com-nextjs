// import { useStore } from '@nanostores/react';
// import { lang } from '../store/language';
import styles from '../styles/Projects.module.scss'
import { projectsLanguage as data } from '../data/languageData';

export default function Projects() {
   
    const $lang = 'eng' //useStore(lang);
    
    return (
        <section id='projects' className={styles.projects}>
                
            <h2>{data[$lang].title}</h2>

            {
                data[$lang].projects.map( (p, i) => {
                    
                    return <article className={styles.project} key={i}>
                
                            <div className={styles.screenshot}>
                                <img src={p.urlImage} alt="" />
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
                                        p.liveDemo && <a className={styles.button} href={p.liveDemo} target="_blank">
                                            {data[$lang].buttonTextDemo}
                                        </a> 
                                    }
                                    { 
                                        p.linkToRepo && <a className={styles.button} href={p.linkToRepo} target="_blank">
                                            {data[$lang].buttonTextRepo}
                                        </a> 
                                    }
                                </div>
                            
                            </div>
                        </article>

                })
                    
            }

    </section>
)}
