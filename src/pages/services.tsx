import styles from '../styles/ServicesPage.module.scss'
import Image from 'next/image'

export default function Services() {

    const benefits = [
        {image: 'https://cdn-icons-png.flaticon.com/512/1243/1243420.png', title: 'CAPTA MÁS CLIENTES', content: 'Gestiona fácilmente el contenido (texto e imágenes) de tu sitio web, con una interfaz super amigable.'},
        {image: 'https://cdn-icons-png.flaticon.com/512/2382/2382307.png', title: 'REDUCE COSTOS', content: 'Olvídate de los gastos de impresión y distribución de su tienda. Llega a más personas sin mucho esfuerzo.'},
        {image: 'https://cdn-icons-png.flaticon.com/512/8188/8188125.png', title: 'NUEVO CANAL DE VENTAS', content: 'Sistema de venta en línea que te permite estar presente a las 24 horas del día, los 365 días del año.'}
    ]

    return (
        <div className={styles.services}>
            <section className={styles.hero}>
                <div className={styles.image}>
                    <Image
                        src='/assets/images/services/hero-image.svg'
                        alt=''
                        width={500}
                        height={500}
                    />

                </div>
                <div className={styles.text}>
                    <h1>Web Responsive Design</h1>
                    <p>
                        Te ofrecemos una Pagina diseñada para que tu negocio venda por internet. El Diseño de Páginas web incluye panel de administración, paginas profesionales, Página de productos y más beneficios para que tu negocio se destaque.
                    </p>
                    <button>
                        Contact us
                    </button>
                </div>

            </section>

            <section className={styles.benefits}>
                <h2>
                    Beneficios de tener un sitio web
                </h2>
                <div className={styles.cardsContainer}>
                    {
                        benefits.map((b, i) => (
                            <article key={i} className={styles.card}>
                                <Image 
                                    src={b.image}
                                    alt=''
                                    width={200}
                                    height={200}
                                />
                                <h2>{b.title}</h2>
                                <p>{b.content}</p>
                        
                            </article>
                        ))
                        
                    }
                    
                    
                </div>
            </section>

        </div>
    )
}
