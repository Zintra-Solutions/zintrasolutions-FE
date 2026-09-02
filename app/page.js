import Hero from "@/components/Hero"
import ServiceOverview from "@/components/ServiceOverview"
import SelectedWork from "@/components/SelectedWork"
import Testimonial from "@/components/Testimonial"
import Insights from "@/components/Insights"
import FinalCTA from "@/components/FinalCTA"


const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceOverview />
      <SelectedWork />
      <Testimonial />
      <Insights />
      <FinalCTA />
      
    </main>
  )
}
export default Home