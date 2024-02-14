import { Inter, Lora, Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'
 
// const inter = Inter()
// const lora = Lora()

const fontLora = Lora({ subsets: ['latin'], variable: '--font-sans', weight: '400', preload: true })

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans', weight: '400', preload: true })
const fontMono = Inter({ subsets: ['latin'], variable: '--font-mono', weight: '400', preload: true })
const sourceCodePro400 = Source_Sans_3({ subsets: ['latin'], variable: '--font-mono', weight: '400', preload: true })
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// const sourceCodePro700 = Source_Sans_3({ weight: '700' })
const theLastShuriken = localFont({ src: '../../public/fonts/TheLastShuriken-Regular.otf' })

const LoraFont = fontLora.className;
const LoraFontStyle = fontLora.style;
 
export { theLastShuriken, fontSans, fontMono, sourceCodePro400, fontLora, LoraFont, LoraFontStyle }