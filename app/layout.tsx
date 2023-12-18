import type {Metadata} from 'next'
import {Domine} from 'next/font/google'
import './globals.css'

const domine = Domine({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'siqiyao',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={domine.className}>
        {children}
      </body>
    </html>
  )
}
