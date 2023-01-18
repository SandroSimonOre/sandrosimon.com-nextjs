import Image from "next/image"
import { useContext } from 'react';
import { LanguageContextType } from '@/@types/language';
import { LanguageContext } from '@/contexts/languageContext';

export const  LanguageToogle = () => {
  
  const { language, changeLanguage } = useContext(LanguageContext) as LanguageContextType
  
  const handleClick = () => {
    
    if (language === 'eng') {
      changeLanguage('esp')
    } else {
      changeLanguage('eng')
    }

  }
  
  return (
    <div onClick={handleClick}>
      <Image 
        src={`/assets/images/flag-${ language === 'eng'? 'esp' : 'eng'}.svg`} 
        alt="" 
        width={30}
        height={18} />
    </div>
  )
}