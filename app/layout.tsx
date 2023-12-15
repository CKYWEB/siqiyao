import type {Metadata} from 'next'
import {Domine} from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";

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
          <Header />
          <div className="flex">
              <NavBar/>
              <div className="container ps-10 md:pt-6 md:ps-0">
                  {children}
              </div>
          </div>
      </body>
    </html>
  )
}
