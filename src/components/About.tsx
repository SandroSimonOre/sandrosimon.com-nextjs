import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import { aboutLanguage as data } from '../data/languageData';
import styles from '../styles/About.module.scss'


export const About = () => {

    const { language } = useContext(LanguageContext) as LanguageContextType
    
    return (
    
        <section id = 'about' className={styles.about}>

            <h2>{ data[language].title }</h2>
            <p>{ data[language].paragraph1 }</p>
            <p>{ data[language].paragraph2 }</p>
            <p>{ data[language].paragraph3 }</p>
            <p>{ data[language].paragraph4 }</p>
            
        </section>
    
    )
}