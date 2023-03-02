import styles from '../styles/VideoContainer.module.scss'

interface Props {
    videoId: string
    width: string
    height: string
    title: string
}

export const VideoContainer = ({ videoId, width, height, title }: Props ) => (
    <div className={styles.videoContainer}>
      <iframe
        width={width} //"853"
        height={height} //"480"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
  