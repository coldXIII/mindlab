/* eslint-disable no-unused-vars */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import EditIcon from '../../courses/icons/EditIcon'
import DeleteIcon from '../../courses/icons/DeleteIcon'
import { ITeacherResponse } from '@/types/teachers'
import { useLocale } from 'next-intl'

type TeacherProps = {
  teacher: ITeacherResponse
  deleteTeacher: (id: string, public_id: string) => void
}

const TeacherCard = ({ teacher, deleteTeacher }: TeacherProps) => {
  const locale = useLocale()
  return (
    <div className={styles.card}>
      <Image
        width={220}
        height={235}
        src={teacher.imageUrl}
        alt={locale === 'en' ? teacher.name_en : teacher.name_ua}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{locale === 'en' ? teacher.name_en : teacher.name_ua}</h3>
        <p className={styles.speciality}>{teacher.speciality}</p>
        <div className={styles.button_container}>
          <button
            className={`${styles.btn} ${styles.btn_delete}`}
            onClick={() => {
              deleteTeacher(teacher.id, teacher.imageId)
            }}
          >
            <DeleteIcon />
          </button>
          <Link
            className={`${styles.btn} ${styles.btn_edit}`}
            href={`/admin/teachers/edit/${teacher.id}`}
          >
            <EditIcon />
          </Link>
        </div>
      </div>
      <Image width={220} height={235} src="/teachers/mask.png" className={styles.mask} alt="mask" />
    </div>
  )
}

export default TeacherCard
