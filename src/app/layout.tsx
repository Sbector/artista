import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Header from './_components/Header'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'sbector',
  description: 'Sitio de artista de sbector',
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
        <Header/>
        {children}
        <footer>
          <p>footer</p>
        </footer>
      </body>
    </html>
  )
}