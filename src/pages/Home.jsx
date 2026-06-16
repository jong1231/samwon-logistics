import Hero from '../components/home/Hero'
import CoreValues from '../components/home/CoreValues'
import Statistics from '../components/home/Statistics'
import BusinessPreview from '../components/home/BusinessPreview'
import Partners from '../components/home/Partners'
import TruckOwnerBox from '../components/home/TruckOwnerBox'

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <Statistics />

      {/* Business Preview + TruckOwnerBox (desktop: floating right) */}
      <div className="relative">
        <BusinessPreview />
        {/* Desktop: floating truck owner box */}
        <div className="hidden lg:block fixed right-8 bottom-28 z-40 w-72">
          <TruckOwnerBox />
        </div>
      </div>

      <Partners />

      {/* Mobile: truck owner box inline */}
      <div className="lg:hidden px-4 pb-16 -mt-4">
        <div className="max-w-md mx-auto">
          <TruckOwnerBox />
        </div>
      </div>
    </>
  )
}
