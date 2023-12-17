import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import am from '../asstest/images/armenia.png'
import en from '../asstest/images/usa.png'
import ru from '../asstest/images/russia.png'
const Locales: FC = () => {
  const { t } = useTranslation()

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!window.localStorage.getItem('language')) {
    window.localStorage.setItem('language', 'en')
  }
  const locales = [
    { id: '1', language: 'en', img: en },
    { id: '2', language: 'ru', img: ru },
    { id: '3', language: 'am', img: am }
  ]
  const { i18n } = useTranslation()

  const changeLanguage = (language: string): void => {
    window.localStorage.setItem('language', language)
    // @ts-expect-error
    i18n.changeLanguage(window.localStorage.getItem('language'))
  }

  return (
       <div>
         <h3 className='locales-title'>{t('language')}</h3>
         <div className='locales-container'>
           {locales.map((e) => (
               <div key={e.id} className='locales-box'>
                 <button onClick={() => { changeLanguage(e.language) }} className='locales-button'>
                   <img src={e.img} alt="am" className={`locales-image  ${window.localStorage.getItem('language') === e.language ? 'selected' : ''}`}/>
                 </button>
               </div>
           ))}
         </div>
       </div>
  )
}
export default Locales
