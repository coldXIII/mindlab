import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SWRProvider } from '../swr-provider'
import { getServerSession } from 'next-auth'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import SessionWrapper from '../session-provider'
import LayoutProvider from './providers/LayoutProvider'

import './globals.css'

const fixelDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/FixelDisplay-ExtraLight.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Light.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Thin.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-SemiBold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Bold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'MindLab',
  description: 'Сторінка освітньої платформи MindLab',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
}

const locales = ['ua', 'en']

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const session = await getServerSession()
  let messages: any
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()
  return (
    <html lang={locale} className={fixelDisplay.className}>
      <SessionWrapper session={session}>
        <SWRProvider>
          <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <LayoutProvider>
                <main>{children}</main>
              </LayoutProvider>
            </NextIntlClientProvider>
          </body>
        </SWRProvider>
      </SessionWrapper>
    </html>
  )
}
