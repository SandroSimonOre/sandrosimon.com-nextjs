import Link from 'next/link'
import styles from '../styles/Logo.module.scss'

export default function Logo() {
    return (
        <div className={styles.logo}>

            <Link href="/">
                
                <span className={styles.bracket}>&#123;</span>

                <div className={styles.content}>
                    <p className={styles.name}>sandroSimon</p>
                    <p className={styles.position}>full stack developer</p>
                </div>
                
                <span className={styles.bracket}>&#125;</span>
                
            </Link>
                
        </div>
    )
}