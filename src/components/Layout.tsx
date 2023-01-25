import { Header } from './Header'
import { Footer } from './Footer'
import styles from '../styles/Layout.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.placeholder}></div>
      {children}
      <Footer />
    </div>
  )
}