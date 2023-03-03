import { Collapsible } from "@/components/Collapsible"
import { aboutData } from '@/data/aboutData'
import { VideoContainer } from "@/components/VideoContainer"
import styles from '../styles/AboutPage.module.scss'

export default function About() {
    
    return (
        <div className={styles.aboutPage}>
            <div className={styles.hero}>
                <div className={styles.text}>
                    <p>Hi again. In this section you can learn more about me.</p>
                    <p>Here I answer some questions you may have about my professional profile.</p>
                </div>
                {/* <div className={styles.image}>
                    <VideoContainer 
                        videoId="300I1onE3K8"
                        width="400"
                        height="300"
                        title="Testing..."
                    />
                </div> */}
            </div>
            {
                aboutData.filter(element => element.show === true).map((element, index) => (
                    <Collapsible 
                        key={index}
                        title={element.title}
                        paragraphs={element.paragraphs}
                    />        
                ))
            }
        </div>
    )
}