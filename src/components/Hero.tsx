import Image from 'next/image';

import styles from '../styles/Hero.module.scss';

export const Hero = () => {

    
    const socialMedia = [   
        {link:'https://linkedin.com/in/sandrosimonore', icon:'social-media-hero-linkedin.png'},
        {link:'https://github.com/sandrosimonore', icon:'social-media-hero-github.png'},
        /* {link:'https://github.com/sandrosimonore', icon:'https://cdn-icons-png.flaticon.com/512/1384/1384012.png'} */
    ]

    return (

        <section className={styles.hero}>   

            <div className={styles.content}>       
                <div className={styles.illustration}>
                    <Image 
                        //src='/assets/images/hero-developer-activity.svg'
                        src='/me.jpg'
                        alt=""
                        width={300}
                        height={300} 
                    />
                </div> 
                <div className={styles.presentation}>
                    <h1>titulo</h1>
                    <p>presentacion</p>
                    
                </div>
            </div>
        
              

        </section>

    )

}