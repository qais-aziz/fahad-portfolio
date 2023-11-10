import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Reviews from "./Reviews";
import ContactUs from "./ContactUs";
import SocialMediaProfiles from "./SocialMediaProfiles";


function WelcomePage() {
    return (
        <>
            <HeroSection />
            <SocialMediaProfiles />
            <Projects />
            <Reviews />
            <ContactUs />
        </>
    );
}

export default WelcomePage;
