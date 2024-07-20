import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { Metadata } from 'next'
import Wrapper from './_components/Wrapper'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "sbector",
    template: "%s | sbector"
  },
  description: "sitio del artista sbector"
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`
    bg-stone-600 
    text-gray-50 
    ${roboto.className}`}>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}