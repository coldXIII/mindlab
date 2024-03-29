/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { RxEyeClosed } from "react-icons/rx";

import styles from './PasswordInput.module.css'
import EyeIcon from '@/components/icons/EyeIcon'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  isWhite?: boolean
  errorText?: string
}

const PasswordInput = forwardRef(function PasswordInput(
  { title, errorText, isWhite, value = '', ...rest }: PasswordInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.wrapper}>
      {!!title && (
        <label htmlFor={title} className="" style={{ fontSize: '16px', fontWeight: 600, }}>
          {title}
        </label>
      )}
      <input
        {...rest}
        id={title}
        value={value}
        className={`${styles.input} ${isWhite && styles.white}`}
        autoComplete="new-password"
        type={showPassword ? 'text' : 'password'}
      />
      <div onClick={() => setShowPassword(!showPassword)} className={styles.eye}>
        {showPassword ? <EyeIcon /> : <RxEyeClosed />}
      </div>
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
