'use client'

import { useContacts } from '@/hooks/swr/useContacts'
import Hero from '@/components/hero/Hero'
import Courses from '@/components/courses/Courses'
import Partners from '@/components/partners/Partners'
import Testimonials from '@/components/testimonials/Testimonials'
import About from '@/components/about/About'
import Teachers from '@/components/teachers/Teachers'
import Parents from '@/components/parents/Parents'
import FeedBack from '@/components/feedback/FeedBack'
import Certificate from '@/components/certificate/Certificate'
import Contacts from '@/components/contacts/Contacts'
import styles from './page.module.css'

const HomePage = () => {
  const { contacts } = useContacts()
  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Partners />
      <Certificate />
      <Parents contacts={contacts} />
      <FeedBack />
      <Contacts contacts={contacts} />
      <Testimonials />
    </div>
  )
}

export default HomePage
