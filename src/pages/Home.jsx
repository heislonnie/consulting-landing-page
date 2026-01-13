import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import MarketSection from "../components/MarketSection";
import InfoCards from "../components/InfoCards";
import CaseStudies from "../components/CaseStudies";
import MissionCTA from "../components/Mission";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <MarketSection />
            <InfoCards />
            <CaseStudies />
            <MissionCTA />
            <FAQ />
            <Testimonials />
            <Features />
            <Footer /> 
        </>
    );
}
export default Home;