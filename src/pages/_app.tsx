import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import LanguageProvider from '@/contexts/languageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </LanguageProvider>
  )    
}
