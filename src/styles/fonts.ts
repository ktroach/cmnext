import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
 
const FontSans = Inter({ subsets: ['latin'], variable: '--font-sans', weight: '400', preload: true })
const FontMono = Inter({ subsets: ['latin'], variable: '--font-mono', weight: '400', preload: true })

const TheLastShuriken = localFont({
    src: [
      {
        path: '../../public/fonts/TheLastShuriken-Regular.otf',
        weight: '400',
      },
    ],
    variable: '--font-thelastshuriken'
  })


const KaiseiDecolRegular = localFont({
    src: [
      {
        path: '../../public/fonts/KaiseiDecol-Regular.ttf',
        weight: '400',
      },
      {
        path: '../../public/fonts/KaiseiDecol-Bold.ttf',
        weight: '700'
      }
    ],
    variable: '--font-kaiseidecol'
  })
 
export { 
    TheLastShuriken, 
    KaiseiDecolRegular, 
    FontSans as fontSans, 
    FontMono as fontMono, 
}