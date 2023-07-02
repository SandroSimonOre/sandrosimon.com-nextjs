import Head from 'next/head'
import Script from 'next/script'
import { Hero } from '@/components/Hero'

import { Skills } from '@/components/Skills'

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandro Simón</title>
        <meta name='title' property='og:title' content='MY PERSONAL WEBSITE' />
        <meta name='type' property='og:type' content='website' />
        <meta name='image' property='og:image' content='https://sandrosimon.com/assets/images/preview.jpg' />
        <meta name='url' property='og:url' content='https://sandrosimon.com' />
        <meta name="description" property='og:description' content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          {/* Google tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-VY4VV4Z2LX" 
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
            
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VY4VV4Z2LX');
            `}
          </Script>
      </div>
      <main className={styles.main}>
        <Hero />
        
        <Skills />
        
        
      </main>
    </>
  )
}
