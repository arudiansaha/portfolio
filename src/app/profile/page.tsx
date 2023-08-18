'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { PageContext } from '@/contexts/context'
import UnderMaintain from '@/components/under-maintain'

export default function Profile() {
  return (
    <PageContext.Provider value="/profile">
      <header>
        <Navbar />
      </header>
      <main className="profile__container">
        <UnderMaintain />
      </main>
      <Footer />
    </PageContext.Provider>
  )
}
