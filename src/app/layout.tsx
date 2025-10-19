import './globals.css'
import type { Metadata } from 'next'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
// import { baseUrl } from './sitemap'
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google'

const GeistSans = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })
const GeistMono = Source_Code_Pro({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  // metadataBase: new URL(baseUrl),
  title: {
    default: 'Paul Obayuwana',
    template: '%s | Paul Obayuwana',
  },
  description:
    'Software engineer specializing in cloud and DevOps — infrastructure as code, CI/CD, containers, and observability.',
  openGraph: {
    title: 'Paul Obayuwana — Cloud & DevOps',
    description:
      'Software engineer specializing in cloud and DevOps — infrastructure as code, CI/CD, containers, and observability.',
    // url: baseUrl,
    siteName: 'Paul Obayuwana',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}



