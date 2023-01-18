import {useState} from 'react'; 
import styles from '../styles/Contact.module.scss'
import { contactLanguage as data } from '../data/languageData';
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';

export const Contact = () => {

    const { language } = useContext(LanguageContext) as LanguageContextType

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> )=> {
        
        e.preventDefault()
        
        const response = await fetch('https://formspree.io/f/xpznogqq', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
        
            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitted(false);
                setFormData({name:'', email: '', message: ''})
            }, 3000);
        }
    }
    
    return (
        
        <section id='contact' className={styles.contact}>

            <h2>{data[language].title}</h2>
    
            <div className={styles.contactInfo}>
                <p>{data[language].paragraph1}</p>
                <p className={styles.email}>📧 hello@sandrosimon.com</p>
            </div>
    
            <div className={styles.contactForm} >
                <p>{data[language].paragraph2}</p>

                <form id="form" name="form" acceptCharset="utf-8" onSubmit={handleSubmit} >
                    <p>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder={data[language].namePlaceholder}  
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                        />
                    </p>
                    <p>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder={data[language].emailPlaceholder} 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                        />
                    </p>
                
                    <p>
                        <textarea 
                            name="message" 
                            rows={6} 
                            placeholder={data[language].messagePlaceholder} 
                            value={formData.message} 
                            onChange={handleChange}
                            required
                        ></textarea>
                    </p>
                    <button>{data[language].textButton}</button>
                    
                </form>

                <div className={`${styles.notification} ${formSubmitted && styles.visible}`} >
                    <p>{data[language].successfulMessage}</p>
                    
                </div>
            </div>
    
        </section>
    )
}