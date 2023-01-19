import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandro Simón</title>
        <meta name='title' property='og:title' content='Sandro Simón | Junior Full Stack Developer' />
        <meta name='type' property='og:type' content='website' />
        <meta name='image' property='og:image' content='https://sandrosimon.com/assets/images/preview.jpg' />
        <meta name='url' property='og:url' content='https://SANDROSIMON.COM' />
        <meta name="description" property='og:description' content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
