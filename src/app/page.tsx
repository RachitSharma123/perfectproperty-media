import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <TrustBar />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
