import styles from '../styles/Header.module.scss';
import Logo from './Logo';

//import { navbarLanguage as data } from '../data/languageData';

export default function Header() {
    
    //const $lang = useStore(lang);
    
    return (

        <nav className={styles.header}>
            <Logo />
            <ul>
                
                <li><a href="#about">{/* { data[$lang].aboutMe } */}About me</a></li>
                <li><a href="#projects">{/* { data[$lang].projects } */}Projects</a></li>
                <li><a href="#contact">{/* { data[$lang].contact } */}Contact</a></li>
                
            </ul>
        </nav>

    )
}