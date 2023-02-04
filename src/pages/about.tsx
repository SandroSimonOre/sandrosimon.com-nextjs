import { Collapsible } from "@/components/Collapsible"
import { aboutData } from '@/data/aboutData'
import { VideoContainer } from "@/components/VideoContainer"
import styles from '../styles/AboutPage.module.scss'

export default function About() {

    
    return (
        <div className={styles.aboutPage}>
            <div className={styles.hero}>
                <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec odio vel enim laoreet vulputate nec id ipsum. Integer quis tellus sit amet enim efficitur ornare.</p>
                    <p>Fusce posuere semper nisi vitae tempor. Nulla vel lectus tincidunt, molestie odio in, egestas elit. Fusce volutpat, felis eget semper sollicitudin.</p>
                </div>
                <div className={styles.image}>
                    <VideoContainer 
                        videoId="300I1onE3K8"
                        width="400"
                        height="200"
                        title="Testing..."
                    />
                </div>
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