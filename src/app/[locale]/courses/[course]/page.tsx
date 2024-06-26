import React from 'react'
import css from '../[course]/page.module.css'
import AboutCourse from '@/components/courses/coursePage/aboutCourse/AboutCourse'
import Course from '@/components/courses/coursePage/course/Course'
// import { coursesPage } from '@/data/courses'
import ComeBackLink from '@/components/courses/coursePage/ComeBack'
import Page404 from '@/components/page_404/Page404'
// import { useCourses } from '@/hooks/swr/useCourses'
import { getCourseById } from '@/utils/api/courses'


const page = ({ params }: { params: { course: string } }) => {
  const currentCourse = getCourseById(params.course)

  return (
    <>
      {!currentCourse ? (
        <Page404 />
      ) : (
        <div className={`container ${css.course__container}`}>
         <ComeBackLink />
          <AboutCourse params={params} />
          <Course params={params} />
          </div>
      )}
  </>
  )
}

export default page
