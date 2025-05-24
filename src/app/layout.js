import { Inter, Caveat, Comfortaa, Lobster } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

const caveat = Caveat({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-caveat',
})

const comfortaa = Comfortaa({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '700'],
  variable: '--font-comfortaa',
})

const lobster = Lobster({ 
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-lobster',
})

export const metadata = {
  title: 'Әдемі - Саған арналған сайт ❤️',
  description: 'Менің сүйіктіме арналған махаббат хаты',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="kk">
      <body className={`${inter.className} ${caveat.variable} ${comfortaa.variable} ${lobster.variable}`}>
        {children}
      </body>
    </html>
  )
}