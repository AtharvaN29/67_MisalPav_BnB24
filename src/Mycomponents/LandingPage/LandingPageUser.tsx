import Analytics from '@/Analytics'
import { ThreeDCardDemo } from '../Card'
import Footer from '../Footer'
import { LayoutGridDemo } from '../Grid'
import Navbar from '../Header'
import Welcome from '../Welcome'

export default function LandingPage() {
  return (
    <div>
      <Navbar usertype={true} />
      <Welcome />
      <LayoutGridDemo />
      <div className='text-3xl text-center'>Your Products</div>
      <ThreeDCardDemo />

      <Footer />
    </div>
  )
}
