
import ServiceClarity from "@/components/services/ServiceClarity"
import ServiceHero from "@/components/services/ServiceHero"
import ServiceList from "@/components/services/ServiceList"



const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServiceList />
      <ServiceClarity/>
    </main>
  )
}
export default ServicesPage