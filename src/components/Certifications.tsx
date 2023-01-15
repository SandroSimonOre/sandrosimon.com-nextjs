//import { useStore } from '@nanostores/react';
//import { lang } from '../store/language';
import Image from 'next/image';
import { Carousel } from './Carousel';
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
                    itemsToShow={2}
                    showArrows={true}
                    showIndicators={false}
                >  
                {
                    
                    certificates.map( (c, i) => (
                        
                        <article data-testid = {`carousel-item-${i}`} className={styles.certification} key={i}>
                            <div className={styles.imageContainer}>
                                <a href={c.link} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src={`/assets/images/${c.img}`} 
                                        width={800}
                                        height={800}
                                        alt="" 
                                    />
                                </a>
                            </div>
                            <div className={styles.title}>
                                <h4>{c.title}</h4>    
                            </div>
                        </article>
                    
                    ))   
                }
                </Carousel>
            </div>
        
        </section>

    )
}