'use client'
import React, { useState } from 'react'
import Card from '../card/Card'
import { useTranslations } from 'next-intl'
import { IForm } from '@/types/forms'
import { LazyLottie } from '@/components/LazyLottie'
import styles from '../About.module.css'

interface BoostEngCardProps {
  placementTestForm: IForm
}

const BoostEngCard = ({ placementTestForm }: BoostEngCardProps) => {
  // const ENG_TEST_URL = 'https://forms.gle/HSFhoc82HunVTQxZ8'
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
      url={placementTestForm ? placementTestForm.formLink : ''}
      text={t('english.btn')}
      hoverHandler={hoverPulseHandler}
    >
      {isPulseHovered ? (
        <div className={styles.pulse}>
          <LazyLottie
            getAnimationData={() => import('@/animations/puls.json')}
            loop={true}
            id="pulse"
          />
        </div>
      ) : null}
    </Card>
  )
}

export default BoostEngCard
