'use client'
import { Controller } from 'react-hook-form'
import Admin_TextArea from '@/components/admin/ui/admin_inputs/text_area/Admin_TextArea'
import css from '../AddCourse.module.css'
import styles from './Theme.module.css'
import PlusIcon from '@/components/icons/PlusIcon';
import { useState } from 'react';

const Themes = ({ control, errors, themeList }: { control: any; errors: any, themeList?: Array<number> }) => {
  const [themesList, setThemesList] = useState<Array<number>>(themeList ? themeList : [1])
 
  return (
    <div className={css.container2}>
      <div className={styles.thumb}>
        <Controller
          name="themeTitleUa"
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Заголовок до тем курсу (max 200 символів):"
              errorText={
                errors.themeTitleUa?.message && errors.themeTitleUa?.message
              }
              placeholder="Заголовок"
            />
          )}
        />
         <Controller
          name="themeTitleEn"
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Заголовок до тем курсу англійською (max 200 символів):"
              errorText={
                errors.themeTitleEn?.message && errors.themeTitleEn?.message
              }
              placeholder="Заголовок"
            />
          )}
        />
      </div>
        <div >
        <h3 className={styles.title}>Теми курсу українською (max 18)</h3>
        <div className={styles.wrapper}>
         
            {themesList.map(item => 
              <Controller
              key={item}
          name={`themesUa${item}`}
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Введіть тему (max 60 символів): "
              errorText={item === 1 ?
                errors.themesUa1?.message && errors.themesUa1?.message : errors.themesUa2?.message && errors.themesUa2?.message}
              placeholder="Що таке політика"
            />
          )}
        />
            )}
         {themesList.length <= 17 &&  <button type="button" onClick={()=>setThemesList(prev => [...prev, themesList.length + 1])} className={styles.btn}><PlusIcon  color='#AAAEDF'/></button>}
        </div>
      </div>
      <div >
        <h3 className={styles.title}>Теми курсу англійською (max 18)</h3>
        <div className={styles.wrapper}>
          {themesList.map(item =>  <Controller
          key={item}
          name={`themesEn${item}`}
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Введіть тему (max 60 символів): "
              errorText={ item === 1 ?
                errors.themesEn1?.message && errors.themesEn1?.message : errors.themesEn2?.message && errors.themesEn2?.messag
              }
              placeholder="What is politics?"
            />
          )}
        />)}
       {themesList.length <= 17 &&  <button type="button" className={styles.btn}><PlusIcon  color='#AAAEDF'/></button>}
         </div>
      </div>
    </div>
  )
}

export default Themes