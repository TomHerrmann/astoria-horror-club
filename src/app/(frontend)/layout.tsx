import React from 'react'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  description: 'The official site of Astoria Horror Club.',
  title: 'Astoria Horror Club',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
