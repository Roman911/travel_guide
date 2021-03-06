import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { Button, FormikControl } from "../../../Components"
import { Editor } from "../../../hooks/editor"
import baseStyles from "../../../styles"
import styles from "./styles"
import loginStyles from "../../../styles/login"
import inputStyles from '../../../Components/Formik/styles'

type CreatePostFormProps = {
  formik: any
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ formik }) => {
  const { values: { type_material, isPrice, editor, tickets }, setFieldValue } = formik
  const options = [
    {
      id: 'new',
      title: 'Новина'
    },
    {
      id: 'post',
      title: 'Стаття'
    },
    {
      id: 'myTrip',
      title: 'Моя подорож'
    }
  ]

  return <>
    <div className={ css(baseStyles.flexVFS) }>
      <div className={ css( type_material !== 'new' ? styles.wrapperBlock : styles.wrapperBlockNews)}>
        <FormikControl control='radio' name='type_material' label='Тип матеріалу:' options={ options } />
        <div className={ css( inputStyles.inputWrapper, baseStyles.flex, styles.btnBlock ) }>
          <p className={ css( inputStyles.label, inputStyles.labelTouched ) }>Додати локацію:</p>
          <Link href={ '/maps' }><a><Button nameBtn='Вибрати на карті' isSubmitting={ false } /></a></Link>
          <div className={ css(baseStyles.br) } />
          <Link href={{
            pathname: '/create-location',
            query: {
              isCreatePost: true
            }
          }}>
            <a><Button nameBtn='Створити локацію' isSubmitting={ false } /></a>
          </Link>
        </div>
        <FormikControl control='input' id='image_loader' type='text' label='Обкладинка:' />
        <FormikControl control='input' id='title' type='text' label='Заголовок:' />
        <FormikControl control='input' id='tag' type='text' label='Теги:' />
      </div>
      {
        type_material !== 'new' && <div className={ css(styles.container) }>
          <div className={ css(baseStyles.flexSB) }>
            <p className={css( styles.text )}>Вхідний Квиток</p>
            <FormikControl control='checkbox' id='isPrice' label='Вхід вільний' values={ isPrice } />
          </div>
          <div className={ css(styles.wrapperPriceGroup) }>
            <FormikControl control='inputGroup' id='tickets' isPrice={ isPrice } valueMap={ tickets } />
          </div>
        </div>
      }
    </div>
    {
      type_material !== 'new' && <>
        <FormikControl control='input' id='work_time' type='text' label='Час роботи:' />
        <FormikControl control='textarea' name='how_to_get_there' label='Як дістатися:' />
      </>
    }
    <Editor editor={ editor } onChange={ setFieldValue } />
    <div className={ css(loginStyles.inputSub, styles.submit) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />
    </div>
  </>
}