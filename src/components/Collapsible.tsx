import { useState } from 'react'
import Image from 'next/image';
import arrowDownImg from '../../public/assets/images/chevron-down.png';
import arrowUpImg from '../../public/assets/images/chevron-up.png';
import styles from '../styles/Collapsible.module.scss'

interface Props {
    title: string;
    paragraphs: string[]
}

export const Collapsible =({title, paragraphs}: Props)=>{
    
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    
    return(
        <div className={ styles.collapsible }>
            <div className={ styles.titleContainer } onClick={ handleClick }>
                <h2 className={styles.title} >{title}</h2>
                <div 
                    className={styles.arrow}
                    
                >
                    {
                        open 
                        ? <Image src={arrowUpImg} width={20} height={20} alt='' /> 
                        : <Image src={arrowDownImg} width={20} height={20} alt='' />
                    }
                </div>
            </div>
            
            { 
                open && <div className={styles.content}>
                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            }
        </div>
    )
}