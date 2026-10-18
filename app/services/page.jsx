
import FinalCTA from "@/components/FinalCTA"
import ServiceClarity from "@/components/services/ServiceClarity"
import ServiceEngagement from "@/components/services/ServiceEngagement"
import ServiceFaq from "@/components/services/ServiceFaq"
import ServiceHero from "@/components/services/ServiceHero"
import ServiceList from "@/components/services/ServiceList"



const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServiceList />
      <ServiceClarity />
      <ServiceEngagement />
      <ServiceFaq />
      <FinalCTA/>
    </main>
  )
}
export default ServicesPage