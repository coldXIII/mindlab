'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { teachers } from '@/data/teachers'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'

import styles from './Slider.module.css'
import 'swiper/css/navigation'
import 'swiper/css'

const Slider = () => {
  const sliderRef = useRef(null)

  const handlePrev = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slidePrev()
    }
  }
  const handleNext = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slideNext()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider_title}>
        <h1>Провідні викладачі</h1>
      </div>
      <div className={styles.swiper}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            ;(sliderRef.current as any) = swiper
          }}
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Link href={`teachers/${teacher.key}`}>
                <TeacherCard teacher={teacher} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navbtn}>
          <Image
            width={24}
            height={24}
            src="/svg/green_arrow.svg"
            alt="previous slide"
            className={styles.arrow}
          />
        </button>
        <button onClick={handleNext} className={styles.navbtn}>
          <Image
            width={24}
            height={24}
            src="/svg/green_arrow.svg"
            alt="next slide"
            className={styles.arrow}
          />
        </button>
      </div>
    </div>
  )
}

export default Slider
