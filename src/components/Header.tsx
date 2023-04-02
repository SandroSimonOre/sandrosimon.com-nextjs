import { useContext } from 'react';
import { Logo } from './Logo';
import { LanguageToogle } from './LanguageToogle';

import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';

import styles from '../styles/Header.module.scss';

export const Header = () => {
    
    const { language } = useContext(LanguageContext) as LanguageContextType
    
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Logo />
                
            </nav>
            <LanguageToogle />
        </header>
    )
}