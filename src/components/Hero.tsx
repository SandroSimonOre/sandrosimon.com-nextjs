//import { useStore } from '@nanostores/react';
//import { lang } from '../store/language';
import Image from 'next/image';
import { heroLanguage as data } from '../data/languageData';
import styles from '../styles/Hero.module.scss';

export default function Hero() {

    const $lang = 'eng' //useStore(lang);

    const socialMedia = [   
        {link:'https://linkedin.com/in/sandrosimonore', icon:'social-media-hero-linkedin.png'},
        {link:'https://github.com/sandrosimonore', icon:'social-media-hero-github.png'},
        /* {link:'https://github.com/sandrosimonore', icon:'https://cdn-icons-png.flaticon.com/512/1384/1384012.png'} */
    
        
    ]

    return (

        <section className={styles.hero}>   

            <div className={styles.content}>       
                <div className={styles.presentation}>
                    <h1>{ data[$lang].title }</h1>
                    <br/>
                    <p>{ data[$lang].presentation }</p>
                </div>

                <div className={styles.illustration}>
                    <Image 
                        src='/assets/images/hero-developer-activity.svg'
                        alt=""
                        width={300}
                        height={300} 
                    />
                </div> 
            </div>
        
            <div className={styles.socialMedia}>
                <ul>
                    {socialMedia.map((sm, i) => (
                        <li key={i}>
                            <a href={sm.link} target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={`/assets/images/${sm.icon}`} 
                                    width={200}
                                    height={200}
                                    alt="" 
                                />
                            </a>
                        </li>
                    ))}
                </ul> 
            </div>  

        </section>

    )

}