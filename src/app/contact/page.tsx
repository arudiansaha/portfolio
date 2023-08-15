'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { PageContext } from '@/contexts/context'
import Link from 'next/link'

export default function Contact() {
  return (
    <PageContext.Provider value="/contact">
      <header>
        <Navbar />
      </header>
      <main className="contact__container">
        <h1 className="contact__title">
          Let&apos;s work together.
          <br />
          <Link href="mailto:rizky.ardiansyah@outlook.com" target="_blank">
            Get in touch.
          </Link>
        </h1>
      </main>
      <Footer />
    </PageContext.Provider>
  )
}
