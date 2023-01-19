import { useState } from 'react'

import styles from '../styles/Collapsible.module.scss'

interface Props {
    title: string;
    content: string
}

export const Collapsible =({title, content}: Props)=>{
    
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    
    return(
        <div className={styles.collapsible}>
            { <h2 className={styles.title} onClick={handleClick}>{title}</h2> }
            { open && <div className={styles.content}>{content}</div>}
        </div>
    )
}