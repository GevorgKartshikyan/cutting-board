import React, { type FC } from 'react'
import SelectBoard from './SelectBoard'
import Locales from './Locales'
const Top: FC = () => {
  return (
     <div className='top-block'>
         <SelectBoard/>
         <Locales/>
     </div>
  )
}
export default Top
