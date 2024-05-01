'use client'
import React, { useEffect, useState } from 'react'
import styles from './Courses.module.css'
import PageTitle from '../shared/pageTitle/PageTitle'
import EditIcon from './icons/EditIcon'
import DeleteIcon from './icons/DeleteIcon'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useCourses } from '@/hooks/swr/useCourses'
import Loader from '../shared/loader/Loader'

const Courses = () => {
  const {courses, deleteCourse, isLoading} = useCourses();
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDeleteCourse = async (id: string) => {
    setIsProcessing(true)
    await deleteCourse(id)
    setIsProcessing(false)
    Swal.fire({
      title: 'Курс успішно видалено',
      icon: 'success'
    })
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити курс?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити курс'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteCourse(id)
      }
    })
  }

  useEffect(()=>{
    console.log('courses=>', courses)
    console.log('isLoading=>', isLoading)
  }, [courses, isLoading])

  return <>
    <PageTitle title='курси' isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} text='Додати курс'  href='/courses/add'/>

    <main className={styles.main_content}>
      <div className={styles.wrapper}>
        <ul className={styles.courses}>
        {courses?.map(
            ({ title, courseDescriptionUa1, id }) => (
              <li className={styles.courses_card} key={title}>
                <div className={styles.course_content}>
                  <h3 className={styles.course_title}>{title}</h3>
                  <p className={styles.courses_description}>{courseDescriptionUa1}</p>
                </div>
                <div className={styles.button_block}>
                  <Link href={`/admin/courses/edit/${id}`} className={`${styles.button_edit} ${styles.link_edit}`}>
                    <EditIcon />
                  </Link>
                  <button type='button' className={styles.button_delete} onClick={()=>handleDelete(id)}>
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </main>
    {(isLoading || isProcessing) && <Loader />}
  </>
}

export default Courses