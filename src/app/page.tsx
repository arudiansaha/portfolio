'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { PageContext } from '@/contexts/context'
import UnderMaintain from '@/components/under-maintain'

export default function Home() {
  return (
    <PageContext.Provider value="/">
      <header>
        <Navbar />
      </header>
      <main className="home__container">
        <UnderMaintain />
      </main>
      <Footer />
    </PageContext.Provider>
  )
}
