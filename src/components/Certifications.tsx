import { Carousel } from './Carousel';
import { CertificationCard } from './CertificationCard';
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import { certificationsLanguage as data } from '../data/languageData';
import styles from '../styles/Certifications.module.scss'

export const Certifications = () => {
    
    const { language } = useContext(LanguageContext) as LanguageContextType
    
    const certificates = [
        {title: 'FRONTEND CON REACT.JS', img: 'certification-platzi-frontend-react.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/8-desarrollo-react/diploma/detalle/'},
        {title: 'FULL STACK DEVELOPER CON JAVASCRIPT', img: 'certification-platzi-javascript.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/100-javascript-full-stack/diploma/detalle/'},
        {title: 'AMAZON WEB SERVICES', img: 'certification-platzi-aws.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/34-aws/diploma/detalle/'}, 
        {title: 'JAVASCRIPT ALGORITHMS AND DATA STRUCTURES', img: 'certification-freecodecamp-algorithms.jpg', link: 'https://www.freecodecamp.org/certification/sandrosimon/javascript-algorithms-and-data-structures'}, 
    ]
    
    return (
        <section className={styles.certifications}>

            <h2>{data[language].title}</h2>
    
            <div className={styles.certificationsContainer}>
                <Carousel
                    showArrows={true}
                    showIndicators={false}
                >  
                {
                    certificates.map( (c, i) => (
                        <CertificationCard
                            key={i}
                            title={c.title}
                            img={`/assets/images/${c.img}`}
                            linkImg={c.link}
                        />
                    ))   
                }
                </Carousel>
            </div>
        
        </section>

    )
}