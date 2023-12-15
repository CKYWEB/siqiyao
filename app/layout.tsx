import type {Metadata} from 'next'
import {Domine} from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header";
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
          <Header />
          <div className="flex space-x-6">
              <NavBar/>
              <div className="container">
                  {children}
              </div>
          </div>
          <Footer className="fixed bottom-0" />
      </body>
    </html>
  )
}
