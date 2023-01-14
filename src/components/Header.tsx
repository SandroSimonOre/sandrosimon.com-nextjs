import styles from '../styles/Header.module.scss';
import Logo from './Logo';
import LanguageToogle from './LanguageToogle';

import { navbarLanguage as data } from '../data/languageData';

export default function Header() {
    
    const $lang = 'eng' //useStore(lang);
    
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Logo />
                <ul>
                    
                    <li><a href="#about">{ data[$lang].aboutMe }</a></li>
                    <li><a href="#projects">{ data[$lang].projects }</a></li>
                    <li><a href="#contact">{ data[$lang].contact }</a></li>
                    
                </ul>
            </nav>
            <LanguageToogle />
        </header>
    )
}