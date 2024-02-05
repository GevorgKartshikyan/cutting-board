import React, { type FC } from 'react'
import arrow from '../asstest/images/up-arrow-svgrepo-com.svg'

const GoTop: FC = () => {
  return (
        <div style={{
          width: 60,
          height: 60,
          position: 'absolute',
          right: 180,
          cursor: 'pointer'
        }}
             onClick={() => { window.scrollTo(0, 0) }}
        >
            <img style={{
              width: '100%',
              height: '100%'
            }} src={arrow} alt="arrow"/>
        </div>
  )
}
export default GoTop
