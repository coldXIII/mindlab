import Hero from '@/components/hero/Hero'
import Courses from '@/components/courses/Courses'
import Partners from '@/components/partners/Partners'
import Reviews from '@/components/reviews/Reviews'
import About from '@/components/about/About'
import styles from './page.module.css'
import Teachers from '@/components/teachers/Teachers'
import Parents from '@/components/parents/Parents'
import FeedBack from '@/components/feedback/FeedBack'

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Courses />
      <Partners />
      <Teachers />
      <Reviews />
      <Parents />
      <FeedBack />
    </div>
  )
}

export default HomePage
