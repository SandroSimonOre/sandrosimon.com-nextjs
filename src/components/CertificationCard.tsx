import Image from 'next/image'
import { ICertification } from '@/interfaces/ICertification' 
import styles from '../styles/CertificationCard.module.scss'

export const CertificationCard:React.FC<ICertification> = ({title, img, linkImg}) => {
    return (
        <article className={styles.certificationCard}>
            <div className={styles.imageContainer}>
                <a href={linkImg} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={img} 
                        width={800}
                        height={800}
                        priority
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