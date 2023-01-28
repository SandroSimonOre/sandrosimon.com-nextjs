import { useContext } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { LanguageToogle } from './LanguageToogle';

import { navbarLanguage as data } from '../data/languageData';

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
                    
                    <li><Link href="/#about">{ data[language].aboutMe }</Link></li>
                    <li><Link href="/#projects">{ data[language].projects }</Link></li>
                    <li><Link href="/#contact">{ data[language].contact }</Link></li>
                    
                </ul>
            </nav>
            <LanguageToogle />
        </header>
    )
}