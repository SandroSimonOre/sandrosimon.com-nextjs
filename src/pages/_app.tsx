import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import LanguageProvider from '@/contexts/languageContext'

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  // These routes do not need the Layout
  if (['/services'].includes(appProps.router.pathname)) 
    return ( 
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    )
   
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </LanguageProvider>
  )

  
}
