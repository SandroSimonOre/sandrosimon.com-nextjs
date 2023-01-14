import styles from '../styles/About.module.scss'
// import { useStore } from '@nanostores/react';
// import { lang } from '../store/language';
import { aboutLanguage as data } from '../data/languageData';

export default function About() {

    const $lang = 'eng' //useStore(lang)
    
    return (
    
        <section id = 'about' className={styles.about}>

            <h2>{ data[$lang].title }</h2>
            <p>{ data[$lang].paragraph1 }</p>
            <p>{ data[$lang].paragraph2 }</p>
            <p>{ data[$lang].paragraph3 }</p>
            <p>{ data[$lang].paragraph4 }</p>
            
        </section>
    
    )
}