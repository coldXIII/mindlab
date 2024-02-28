'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTeachers } from '@/hooks/swr/useTeachers'
import Search from './search/Search'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'
import styles from './Teachers.module.css'

const Teachers = () => {
  const { teachers } = useTeachers()
  const [query, setQuery] = useState('')
  const [selectedQuery, setSelectedQuery] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [filteredTeachers, setFilteredTeachers] = useState([])

  useEffect(() => {
    setQuery('')
    setSelectedQuery('')
    if (speciality === '') {
      setFilteredTeachers(teachers)
    } else {
      setFilteredTeachers(
        teachers?.filter(
          (teacher) => teacher?.speciality?.toLowerCase() === speciality.toLowerCase()
        )
      )
    }
  }, [speciality, teachers])

  const filterByQuery = () => {
    setSpeciality('')
    setSelectedQuery(query)
    if (query === '') {
      setFilteredTeachers(teachers)
    } else {
      setFilteredTeachers(
        teachers?.filter(
          (teacher) =>
            teacher?.speciality?.toLowerCase().includes(query.toLowerCase()) ||
            teacher?.name?.toLowerCase().includes(query.toLowerCase())
        )
      )
    }
  }

  return (
    <section id="teachers" className={`${styles.wrapper} container`}>
      <div className={`${styles.section_title} title`}>
        <motion.h1
          viewport={{ once: true }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.75 }}
        >
          Провідні викладачі
        </motion.h1>
      </div>
      <Search setQuery={setQuery} query={query} handleClick={filterByQuery} />
      <Tabs
        teachers={teachers}
        setSpeciality={setSpeciality}
        speciality={speciality}
        query={selectedQuery}
      />
      {filteredTeachers && filteredTeachers.length ? (
        <Slider teachers={filteredTeachers} />
      ) : (
        <p className={styles.not_found}>
          Ми не знайшли зареєстрованих викладачів за вашим запитом...
        </p>
      )}
    </section>
  )
}

export default Teachers
