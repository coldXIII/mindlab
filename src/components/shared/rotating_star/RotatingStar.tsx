'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './RotatingStar.module.css'

const RotatingStar = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Image
        width={100}
        height={100}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.rotating_star}
        src="/svg/hero/rotating_star.svg"
        alt="Отримати консультацію"
      />
      {isHovered ? (
        <Image
          width={85}
          height={85}
          className={styles.smile}
          src="/svg/hero/smile2.svg"
          alt="smile"
        />
      ) : (
        <Image
          width={85}
          height={85}
          className={styles.smile}
          src="/svg/hero/smile.svg"
          alt="smile"
        />
      )}
    </div>
  )
}

export default RotatingStar
