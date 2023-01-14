export const heroLanguage =  {

    eng: {
        title: "Hello, I'm Sandro Simón,",
        presentation: "a self-taught Full Stack Developer currently living in Perú looking for an opportunity to work remotely in the technology industry. I love developing with the JavaScript ecosystem: React.js, Node.js, Express, and with relational databases like PostgreSQL and MySQL."
    },

    esp: {
        title: "Hola, soy Sandro Simón,",
        presentation: "un Full Stack Developer autodidacta actualmente viviendo en Perú en busca de una oportunidad para trabajar en el sector de tecnología de forma remota. Me encanta desarrollar con el ecosistema de JavaScript: React.js, Node.js, Express y con bases de datos relacionales como PostgreSQL y MySQL."
    }
    
}

export const projectsLanguage =  {

    eng: {
        title: "projects",
        technologiesTitle: "Technologies:",
        buttonTextRepo: "View on Github",
        buttonTextDemo: "Live demo",
        projects: [
            {   
                title: "movies browser",
                overview: "It is an application that allows the users to browse movies and save them as a favorite on their local browser. It consumes The Movie DB API. State management with Context API and Infinite Scroll were implemented on this project.",
                technologies: "React.js, Sass, React Router DOM, Axios, Context API, FlexBox, Grid.",
                urlImage: "/assets/images/projects-movies-app.jpg",
                linkToRepo : "https://github.com/SandroSimonOre/movies-explorer",
                liveDemo: "https://moviesexplorer.sandrosimon.com/",
            },
            {
                title: "store api rest",
                overview: "An application that allows the user to create, modify, query and delete entities such as products, customers, and orders. Access to the endpoints is according to the user's role. Users with guest role, for example, can only view information. The database is hosted in Amazon Web Services.",
                technologies: "Node.js, Express, PostgreSQL, Sequelize, Swagger, Jason Web Tokens, Git, Docker.",
                urlImage: "/assets/images/projects-my-store-api.jpg",
                linkToRepo : "https://github.com/SandroSimonOre/my-store",
                buttonTextRepo: "View on Github",
            },
        ]        
    },

    esp:  {
        title: "proyectos",
        technologiesTitle: "Tecnologías:",
        buttonTextRepo: "Ver en Github",
        buttonTextDemo: "Live demo",
        projects: [
            {   
                title: "movies browser",
                overview: "Una aplicación que permite a los usuarios buscar películas y guardarlas como favoritas en su navegador local. Hace consumo de la API de The Movie DB. Gestión de estados con Context API y Scroll infinito fueron implementados en este proyecto.",
                technologies: "React.js, Sass, React Router DOM, Axios, Context API, FlexBox, Grid.",
                urlImage: "/assets/images/projects-movies-app.jpg",
                linkToRepo : "https://github.com/SandroSimonOre/movies-explorer",
                liveDemo: "https://moviesexplorer.sandrosimon.com/",
            },
            {
                title: "store api rest",
                overview: "Una aplicación que permite al usuario crear, modificar, consultar y  eliminar entidades tales como productos, clientes, y pedidos. El acceso a cada endpoint es según el rol del usuario. Por ejemplo, usuarios con el rol guest sólo pueden consultar información. La base de datos se encuentra alojada en Amazon Web Services.",
                technologies: "Node.js, Express, PostgreSQL, Sequelize, Swagger, Jason Web Tokens, Git, Docker.",
                urlImage: "/assets/images/projects-my-store-api.jpg",
                linkToRepo : "https://github.com/SandroSimonOre/my-store",
                buttonTextRepo: "View on Github",
            },
        ]        
    }

}

export const aboutLanguage =  {

    eng: {
        
        title: "About me",
        paragraph1: "I am an accountant by profession, currently making a career change. My passion for programming began while I was working as an accountant. I had to deal with a lot of information and doing it manually was really complicated.",
        paragraph2: "So after doing some research, I discovered that Excel included a feature called Visual Basic for Applications that allowed me to automate those repetitive tasks, save time and eliminate errors associated with manual work. Later I learned about databases and I started using MariaDB (a MySQL fork) to handle large amounts of data.",
        paragraph3:  "At the beginning of the year 2022, I learned about the opportunities to work remotely in technology for foreign companies and it was then that I began an intensive process of preparing myself in technologies for web development.",
        paragraph4: "I have prepared myself with platforms like Platzi, Udemy, FreeCodeCamp, Open Bootcamp, among others."
    },

    esp: {
        title: "Sobre mí",
        paragraph1: "Soy contador de profesión, actualmente haciendo un cambio de carrera. Mi pasión por la programación nació mientras trabajaba como contador. Tenía que lidiar con bastante información y hacerlo de forma manual era realmente complicado.",
        paragraph2: "Así que luego de investigar un poco, descubrí que Excel incluía una característica llamada Visual Basic for Applications que me permitió automatizar aquellas tareas repetitivas, ahorrar tiempo y eliminar errores propios del trabajo manual. Más adelante aprendí sobre bases de datos y empecé a usar MariaDB (fork de MySQL) para manejar grandes cantidades de datos.",
        paragraph3:  "A inicios de el año 2022, supe acerca de las oportunidades de trabajar en tecnología para empresas del exterior de forma remota y fue entonces que inicie un proceso intensivo de preparación en tecnologías para el desarrollo web.",
        paragraph4: "Me he preparado con plataformas como Platzi, Udemy, FreeCodeCamp, Open Bootcamp, entre otras."
        
    }

}

export const skillsLanguage =  {

    eng: {	
        title: "Skills",
    },
    
    esp: {
        title: "Skills",
    }
    
}

export const contactLanguage =  {

    eng: {
        title: 'Contact',
        paragraph1: 'You can send me a message to this email:',
        paragraph2: 'Or if you prefer, fill out and send this form:',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your email',
        messagePlaceholder: 'Write your message here',
        textButton: 'Send now!',
        successfulMessage: "Message successfully sent.",
    },

    esp: {

        title: 'Contacto',
        paragraph1: 'Puedes enviarme un mensaje a este correo:',
        paragraph2: 'O si prefieres, completa y envíame este formulario:',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'Tu correo electrónico',
        messagePlaceholder: 'Escribe tu mensaje aquí',
        textButton: 'Enviar ahora',
        successfulMessage: "Mensaje enviado exitosamente."    
    }

}

export const certificationsLanguage =  {

    eng: {
        title: "Certifications",
    },

    esp: {
        title: "Certificaciones",
    }

}

export const navbarLanguage =  {

    eng: {
        aboutMe: 'About me',
        projects: 'Projects',
        contact: 'Contact'
    },

    esp: {
        aboutMe: 'Sobre mí',
        projects: 'Proyectos',
        contact: 'Contacto'
    }

}