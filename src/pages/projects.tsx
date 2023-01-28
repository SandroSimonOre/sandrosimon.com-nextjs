import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';
import styles from '../styles/ProjectsPage.module.scss'

export default function Projects() {

    // This is temporary, later I must move to its own folder. This is for experimenting with some changes
    const projectsLanguage =  {

        eng: {
            title: "My projects",
            technologiesTitle: "Technologies:",
            buttonTextRepo: "View on Github",
            buttonTextDemo: "Live demo",
            projects: [
                {
                    title: "beautiful places",
                    mediaType: "video",
                    overview: "A web app in which the user can see places where to stay and make a reservation.",
                    technologies: "Next.js, MongoDB, React Hook Form",
                    urlImage: "/assets/images/projects-places.png",
                    linkToRepo : "https://github.com/SandroSimonOre/resort",
                    liveDemo: "https://places.sandrosimon.com/",
                    buttonTextRepo: "View on Github",
                },
                {   
                    title: "movies browser",
                    mediaType: "image",
                    overview: "It is an application that allows the users to browse movies and save them as a favorite on their local browser. It consumes The Movie DB API. State management with Context API and Infinite Scroll were implemented on this project.",
                    technologies: "React.js, Sass.",
                    urlImage: "/assets/images/projects-movies-app.jpg",
                    linkToRepo : "https://github.com/SandroSimonOre/movies-explorer",
                    liveDemo: "https://moviesexplorer.sandrosimon.com/",
                },
                {
                    title: "store api rest",
                    mediaType: "image",
                    overview: "An application that allows the user to create, modify, query and delete entities such as products, customers, and orders. Access to the endpoints is according to the user's role. Users with guest role, for example, can only view information. The database is hosted in Amazon Web Services.",
                    technologies: "Node.js, Express, PostgreSQL, Sequelize, Swagger, Jason Web Tokens, Git, Docker.",
                    urlImage: "/assets/images/projects-my-store-api.jpg",
                    linkToRepo : "https://github.com/SandroSimonOre/my-store",
                    buttonTextRepo: "View on Github",
                },
                
            ]        
        },
    
        esp:  {
            title: "Mis proyectos",
            technologiesTitle: "Tecnologías:",
            buttonTextRepo: "Ver en Github",
            buttonTextDemo: "Live demo",
            projects: [
                {
                    title: "beautiful places",
                    mediaType: "image",
                    overview: "Una aplicación que permite al usuario ver lugares en los que alojarse y hacer una reservación.",
                    technologies: "Next.js, MongoDB, React Hook Form",
                    urlImage: "/assets/images/projects-places.png",
                    linkToRepo : "https://github.com/SandroSimonOre/resort",
                    liveDemo: "https://places.sandrosimon.com/",
                    buttonTextRepo: "Ver en Github",
                },
                {   
                    title: "movies browser",
                    mediaType: "image",
                    overview: "Una aplicación que permite a los usuarios buscar películas y guardarlas como favoritas en su navegador local. Hace consumo de la API de The Movie DB. Gestión de estados con Context API y Scroll infinito fueron implementados en este proyecto.",
                    technologies: "React.js, Sass.",
                    urlImage: "/assets/images/projects-movies-app.jpg",
                    linkToRepo : "https://github.com/SandroSimonOre/movies-explorer",
                    liveDemo: "https://moviesexplorer.sandrosimon.com/",
                },
                {
                    title: "store api rest",
                    mediaType: "image",
                    overview: "Una aplicación que permite al usuario crear, modificar, consultar y  eliminar entidades tales como productos, clientes, y pedidos. El acceso a cada endpoint es según el rol del usuario. Por ejemplo, usuarios con el rol guest sólo pueden consultar información. La base de datos se encuentra alojada en Amazon Web Services.",
                    technologies: "Node.js, Express, PostgreSQL, Sequelize, Swagger, Jason Web Tokens, Git, Docker.",
                    urlImage: "/assets/images/projects-my-store-api.jpg",
                    linkToRepo : "https://github.com/SandroSimonOre/my-store",
                    buttonTextRepo: "Ver Github",
                },
            ]        
        }
    
    }

    const { language } = useContext(LanguageContext) as LanguageContextType

    return (
        <div className={styles.projects}>
            <h1>{projectsLanguage[language].title}</h1>
            {
                projectsLanguage[language].projects.map((project, idx) => (
                    <div key={idx} className={styles.projectCard}>
                        <div className={styles.mediaContainer}>
                            {
                                project.mediaType === "video" && (
                                    <div><h2>Video</h2></div>
                                )
                            }
                            {
                                project.mediaType === "image" && (
                                    <div><h2>Imagen</h2></div>
                                )
                            }
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.titleContainer}>
                                {project.title}
                            </div>
                            <div className={styles.overviewContainer}>
                                {project.overview}
                            </div>
                            <div className={styles.technologiesContainer}>
                                {project.technologies}
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Github</button>
                                <button>Live Demo</button>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}