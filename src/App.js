import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import SocialMediaProfiles from "./components/SocialMediaProfiles";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header />
        <HeroSection />
        <SocialMediaProfiles />
        <Projects />
        <Reviews />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
