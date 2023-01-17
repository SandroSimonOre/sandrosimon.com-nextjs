//import { useStore } from '@nanostores/react';
//import { lang } from '../store/language';

import { Carousel } from './Carousel';
import {CertificationCard} from './CertificationCard';
import styles from '../styles/Certifications.module.scss'
import { certificationsLanguage as data } from '../data/languageData';

export default function Certifications() {
    
    const $lang = 'eng' //useStore(lang);
    
    const certificates = [
        {title: 'FRONTEND CON REACT.JS', img: 'certification-platzi-frontend-react.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/8-desarrollo-react/diploma/detalle/'},
        {title: 'FULL STACK DEVELOPER CON JAVASCRIPT', img: 'certification-platzi-javascript.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/100-javascript-full-stack/diploma/detalle/'},
        {title: 'AMAZON WEB SERVICES', img: 'certification-platzi-aws.jpg', link: 'https://platzi.com/p/sandrosimon/ruta/34-aws/diploma/detalle/'}, 
        {title: 'JAVASCRIPT ALGORITHMS AND DATA STRUCTURES', img: 'certification-freecodecamp-algorithms.jpg', link: 'https://www.freecodecamp.org/certification/sandrosimon/javascript-algorithms-and-data-structures'}, 
    ]
    
    return (
        <section className={styles.certifications}>

            <h2>{data[$lang].title}</h2>
    
            <div className={styles.certificationsContainer}>
                <Carousel
                    showArrows={true}
                    showIndicators={false}
                >  
                {
                    //  src={`/assets/images/${c.img}`} 
                    certificates.map( (c, i) => (
                        <CertificationCard
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