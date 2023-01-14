//import { useStore } from '@nanostores/react';
//import { lang } from '../store/language';

export default function LanguageToogle() {
  
  //const $lang = useStore(lang);
  
  const handleClick = () => {
    
    //if ($lang === 'eng') {
    //  lang.set('esp')
    //} else {
    //  lang.set('eng')
    //}

  }
  
  return (
    <div onClick={handleClick}>
      {/* <img src={`/assets/images/flag-${$lang === 'eng'? 'esp' : 'eng'}.svg`} alt="" height="18" /> */}
    </div>
  )
}