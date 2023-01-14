//import { useStore } from '@nanostores/react';
//import { lang } from '../store/language';
import Image from "next/image"

export default function LanguageToogle() {
  
  const $lang = 'eng' // useStore(lang);
  
  const handleClick = () => {
    
    if ($lang === 'eng') {
      //lang.set('esp')
    } else {
      //lang.set('eng')
    }

  }
  
  return (
    <div onClick={handleClick}>
      <Image 
        src={`/assets/images/flag-${$lang === 'eng'? 'esp' : 'eng'}.svg`} 
        alt="" 
        width={30}
        height={18} />
    </div>
  )
}