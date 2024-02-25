import Link from 'next/link'
import { staticConfig } from '@/config/static'
import { Block } from '@/components/containers/block'

export function SiteFooter() {
  return (
    <>
      <footer className="w-full border-t bg-background">
        <Block as="div">
          <section
            id="footer-content"
            aria-labelledby="footer-content-heading"
            className="flex flex-col gap-10 lg:flex-row lg:gap-20"
          >
            <section
              id="footer-links"
              aria-labelledby="footer-links-heading"
              className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-4"
            >
              {staticConfig.footerNav.map((item) => (
                <div key={item.title} className="space-y-3">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <ul className="space-y-3">
                    {item.items.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          target={link?.external ? '_blank' : undefined}
                          rel={link?.external ? 'noreferrer' : undefined}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.title}
                          <span className="sr-only">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </section>
        </Block>
      </footer>
    </>
  )
}
