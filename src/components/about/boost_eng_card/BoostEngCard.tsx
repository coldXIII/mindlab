'use client'
import React, { useState } from 'react'
import styles from '../About.module.css'
import Card from '../card/Card'
import Lottie from 'lottie-react'
import pulse from '@/animations/puls.json'
import { useTranslations } from 'next-intl'

const BoostEngCard = () => {
  const ENG_TEST_URL = 'https://forms.gle/HSFhoc82HunVTQxZ8'
  const [isPulseHovered, setIsPulseHovered] = useState(false)

  const t = useTranslations('About')

  const boostEngCardDesc = (
    <p className={styles.description}>
      <span className={styles.description_text}>
        {t('english.improve')} <b className={styles.description_breaker} />
        {t('english.bonus')}{' '}
      </span>
      {t('english.free')} <span className={styles.description_text}>{t('english.course')}</span>
    </p>
  )

  const hoverPulseHandler = () => {
    setIsPulseHovered(!isPulseHovered)
  }

  return (
    <Card
      title={t('english.title')}
      description={boostEngCardDesc}
      url={ENG_TEST_URL}
      text={t('english.btn')}
      hoverHandler={hoverPulseHandler}
    >
      {isPulseHovered ? (
        <div className={styles.pulse}>
          <Lottie animationData={pulse} />
        </div>
      ) : null}
    </Card>
  )
}

export default BoostEngCard
