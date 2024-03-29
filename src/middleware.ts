/* eslint-disable import/no-anonymous-default-export */
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['ua', 'en'],

  // Used when no locale matches
  defaultLocale: 'ua',
  localeDetection: false
})

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
