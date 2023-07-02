import { VideoContainer } from "@/components/VideoContainer"
import styles from '../styles/Vlog.module.scss'

const videos = [
    {
        title: 'Build a MERN React Admin Dashboard', 
        id: '0cPCMIuDk2I', 
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'TypeScript Full Course for Beginners', 
        id: 'gieEQFIfgYc', 
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'Docker and Kubernetes Full Course', 
        id: 'XpiU97M3ydM', 
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'Database Design Course', 
        id: 'ztHopE5Wnpc', 
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'Microservices & System Design Full Course', 
        id: 'hmkF77F9TLw', 
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    
]

export default function Vlog() {
    return <div className={styles.vlog}>
        {
            videos.map(v => (
                <article key={v.id}>
                    <div className={styles.videoContainer}>
                        <VideoContainer title={v.title} videoId={v.id} height='200' width='300'/>
                    </div>
                    <div className={styles.overviewContainer}>
                        <h2>{v.title}</h2>
                        <p>{v.overview}</p>
                    </div>
                </article>
            ))
        }
    </div>
}