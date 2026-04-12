import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Volunteer from '@/components/Volunteer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
