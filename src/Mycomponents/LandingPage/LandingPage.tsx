import Analytics from '@/Analytics'
import { ThreeDCardDemo } from '../Card'
import Footer from '../Footer'
import { LayoutGridDemo } from '../Grid'
import Navbar from '../Header'
import Welcome from '../Welcome'

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <LayoutGridDemo />
      <h1>Your Products</h1>
      <ThreeDCardDemo />
      <Analytics />
      <Footer />
    </div>
  )
}
