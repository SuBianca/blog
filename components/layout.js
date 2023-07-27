import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
