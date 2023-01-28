import { Logo } from './Logo';
import { LanguageToogle } from './LanguageToogle';

import { navbarLanguage as data } from '../data/languageData';
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';

import styles from '../styles/Header.module.scss';

export const Header = () => {
    
    const { language } = useContext(LanguageContext) as LanguageContextType
    
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Logo />
                <ul>
                    
                    <li><a href="#about">{ data[language].aboutMe }</a></li>
                    <li><a href="#projects">{ data[language].projects }</a></li>
                    <li><a href="/#contact">{ data[language].contact }</a></li>
                    
                </ul>
            </nav>
            <LanguageToogle />
        </header>
    )
}