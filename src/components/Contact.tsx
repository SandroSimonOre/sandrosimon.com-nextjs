import {useState} from 'react'; 
// import { useStore } from '@nanostores/react';
// import { lang } from '../store/language';
import styles from '../styles/Contact.module.scss'
import { contactLanguage as data } from '../data/languageData';


 // TODO: Read the local storage or the browser setting

export default function Contact() {

    const $lang = 'eng' // useStore(lang);

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

            <h2>{data[$lang].title}</h2>
    
            <div className={styles.contactInfo}>
                <p>{data[$lang].paragraph1}</p>
                <p className={styles.email}>📧 hello@sandrosimon.com</p>
            </div>
    
            <div className={styles.contactForm} >
                <p>{data[$lang].paragraph2}</p>

                <form id="form" name="form" acceptCharset="utf-8" onSubmit={handleSubmit} >
                    <p>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder={data[$lang].namePlaceholder}  
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                        />
                    </p>
                    <p>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder={data[$lang].emailPlaceholder} 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                        />
                    </p>
                
                    <p>
                        <textarea 
                            name="message" 
                            rows={6} 
                            placeholder={data[$lang].messagePlaceholder} 
                            value={formData.message} 
                            onChange={handleChange}
                            required
                        ></textarea>
                    </p>
                    <button>{data[$lang].textButton}</button>
                    
                </form>

                <div className={`${styles.notification} ${formSubmitted && styles.visible}`} >
                    <p>{data[$lang].successfulMessage}</p>
                    
                </div>
            </div>
    
        </section>
    )
}