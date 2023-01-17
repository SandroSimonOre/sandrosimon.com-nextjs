import Image from 'next/image'
import styles from '../styles/CertificationCard.module.scss'

interface Certification {
    title: string,
    img: string,
    linkImg: string
}

export const CertificationCard:React.FC<Certification> = ({title, img, linkImg}) => {
    return (
        <article className={styles.certificationCard}>
            <div className={styles.imageContainer}>
                <a href={linkImg} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={img} 
                        width={800}
                        height={800}
                        alt="" 
                    />
                </a>
            </div>
            <div className={styles.title}>
                <h4>{title}</h4>    
            </div>
        </article>
    )
}