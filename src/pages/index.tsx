import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandro Simón</title>
        <meta name="description" content="Generated by create next app" />
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
