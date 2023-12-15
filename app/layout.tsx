import type {Metadata} from 'next'
import {Domine} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

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
          <NavBar />
          <div className="flex max-w-6xl">
              <div className="w-full md:me-4">
                  {children}
              </div>
          </div>
          <Footer className="mt-10" />
      </body>
    </html>
  )
}
