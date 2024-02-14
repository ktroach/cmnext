import { Container } from "@/components/containers/container";
import { fontSans, fontMono, theLastShuriken, sourceCodePro400, fontLora, LoraFont, LoraFontStyle }  from "@/styles/fonts"

export default function IndexPage() {
    return (
        <Container as="div" className="gap-12">
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
                >
                <p className={fontMono.className}>Hello world using Inter font</p>
                <p className={LoraFont}>Hello world using Lora font</p>
                <p style={LoraFontStyle}>Hello world using Lora font style</p>
                <p className={sourceCodePro400.className}>
                    Hello world using Source_Sans_3 font with weight 700
                </p>
                <p className={theLastShuriken.className}>My title in Great Vibes font</p>
            </section>
        </Container>
    )
}