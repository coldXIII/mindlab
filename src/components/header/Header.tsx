'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Burger from '../icons/Burger'
import styles from './Header.module.css'
import Lottie from 'lottie-react'
// import { useMediaQuery } from '@react-hook/media-query'
import { useLocale, useTranslations } from 'next-intl'
import { useWidth } from '@/hooks/useWidth'
import chatbot_default from '@/animations/сhatbot_default.json'
import chatbot_hover from '@/animations/chatbot_hover.json'
// import MobileMenu from './mobile_menu/MobileMenu'
import Logo from './logo/Logo'
import LanguageSwitcher from './LocalSwitcher'
import { useModal } from '@/stores/useModal'
import MenuModal from '../modals/menuModal/MenuModal'

const Header = () => {
  const pathname = usePathname()
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  // const isSmallScreen = useMediaQuery('(max-width: 1024px)')
  const currentWidth = useWidth()
  const locale = useLocale()

  const isAdminPage = pathname.split('/').includes('admin') || pathname.split('/').includes('login')

  const t = useTranslations('Menu')
  const { openModal, closeModal } = useModal()

  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)

  if (isAdminPage) return null

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <Logo />
        </div>
        <nav className={styles.header_nav}>
          <ul>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#courses`}>{t('courses')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#teachers`}>{t('speakers')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#partners`}>{t('partners')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#parents`}>{t('parents')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#contacts`}>{t('contacts')}</Link>
            </li>
          </ul>
          {currentWidth >= 1024 && <LanguageSwitcher />}
          <a href="https://t.me/+Q8t3dkMH84hiYmNi" target="_blank">
            <Lottie
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animationData={isHovered ? chatbot_hover : chatbot_default}
              loop={true}
              className={styles.lottie}
            />
          </a>
          <div className={styles.header_burger} onClick={() => openModal('mobmenu')}>
            <Burger />
          </div>
        </nav>
        {isModalOpen && modalType === 'mobmenu' && <MenuModal handleClose={closeModal} />}
        {/* {isMenuOpen && isSmallScreen && <MobileMenu onClose={() => setIsMenuOpen(false)} />} */}
      </div>
    </header>
  )
}

export default Header
