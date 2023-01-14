import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
    
    const footerSocialMedia = [
        { link: 'https://linkedin.com/in/sandrosimonore/', icon: 'social-media-footer-linkedin.png', title:'Linkedin'},
        { link:'https://github.com/sandrosimonore', icon: 'social-media-footer-github.png', title:'Github'}
    ]
    
    return (
        <footer className={styles.footer}>
    
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

        </footer>
    )
}