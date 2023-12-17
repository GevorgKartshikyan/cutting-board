import React, { type ChangeEvent, type FC, useCallback, useState } from 'react'
import radius from '../asstest/images/radius.jpg'
import Button from './Button'
import { type BoardFieldsModalProps, type extraFields } from '../helpers/types'
import { useDispatch } from 'react-redux'
import { changeExtraFields } from '../store/actions/board'
import { useTranslation } from 'react-i18next'

const BoardFieldsModal: FC<BoardFieldsModalProps> = ({ id, onCloseModal }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [radiusForm, setRadiusForm] = useState<extraFields>({
    id,
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  })
  const handleChange = useCallback((key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
    setRadiusForm({ ...radiusForm, [key]: event.target.value })
  }, [radiusForm])
  const handleSaveExtraFields = useCallback(() => {
    dispatch(changeExtraFields({
      ...radiusForm
    }))
    onCloseModal()
  }, [radiusForm])
  return (
        <div className='modal'>
            <button type='button' onClick={onCloseModal} className='modal-close'>X</button>
            <div className='modal-top-block'>
                <h2 className='modal-title'>{t('modal_title')}</h2>
                <img src={radius} alt='Internal cut' className='modal-img'/>
            </div>
            <div className='modal-input-block'>
               <div>
                   <div className='modal-input-box'>
                       <label className="form__label" htmlFor="width">{t('top_left')}</label>
                       <input
                           value={radiusForm.borderTopLeftRadius}
                           type="number"
                           className='form__input'
                           onChange={handleChange('borderTopLeftRadius')}
                       />
                   </div>
                   <div className='modal-input-box'>
                       <label className="form__label" htmlFor="width">{t('top_right')}</label>
                       <input
                           value={radiusForm.borderTopRightRadius}
                           type="number"
                           className='form__input'
                           onChange={handleChange('borderTopRightRadius')}
                       />
                   </div>
               </div>
                <div>
                    <div className='modal-input-box'>
                        <label className="form__label" htmlFor="width">{t('bottom_left')}</label>
                        <input
                            value={radiusForm.borderBottomLeftRadius}
                            type="number"
                            className='form__input'
                            onChange={handleChange('borderBottomLeftRadius')}
                        />
                    </div>
                    <div className='modal-input-box'>
                        <label className="form__label" htmlFor="width">{t('bottom_right')}</label>
                        <input
                            value={radiusForm.borderBottomRightRadius}
                            type="number"
                            className='form__input'
                            onChange={handleChange('borderBottomRightRadius')}
                        />
                    </div>
                </div>
            </div>
            <div style={{
              width: 200,
              height: 200,
              backgroundColor: 'brown',
              ...Object.fromEntries(Object.entries(radiusForm).map(([key, value]) => [key, +value]))
            }}/>
            <div>
               <Button title={t('close')} className='modal-button' type='button' onAddData={onCloseModal}/>
               <Button title={t('save')} className='modal-button' type='button' onAddData={handleSaveExtraFields}/>
            </div>
        </div>
  )
}

export default BoardFieldsModal
