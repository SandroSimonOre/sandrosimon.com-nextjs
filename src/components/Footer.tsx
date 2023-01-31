import Image from 'next/image'
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import { footerLanguage as data } from '../data/languageData';

import styles from '../styles/Footer.module.scss'

export const Footer = () => {
    
    const { language } = useContext(LanguageContext) as LanguageContextType

    const footerSocialMedia = [
        { link: 'https://linkedin.com/in/sandrosimonore/', icon: 'social-media-footer-linkedin.png', title:'Linkedin'},
        { link:'https://github.com/sandrosimonore', icon: 'social-media-footer-github.png', title:'Github'}
    ]
    
    return (
        <footer className={styles.footer}>

            <div className={styles.socialMediaContainer}>
    
                {footerSocialMedia.map((sm, i) => (
                    <div key={i} className={styles.iconContainer}>
                        <a href={sm.link} target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <Image 
                                    src={`/assets/images/${sm.icon}`}
                                    width={30}
                                    height={30}
                                    alt=""
                                    className={styles.img}
                                />
                            </div>

                            <div>
                                <span className={styles.title}>{sm.title}</span>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
            
            <div className={styles.sourceLink}>
                <p>{data[language].credit}</p>
                <p>
                    
                    <a 
                        href='https://github.com/SandroSimonOre/sandrosimon.com-nextjs'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <span>{data[language].linkText}</span>
                    </a>
                </p>
            </div>

        </footer>
    )
}