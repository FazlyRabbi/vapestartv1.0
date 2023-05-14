import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import Description from "@/components/AboutUs/Description";
import MeetTheTeam from "@/components/AboutUs/MeetTheTeam";
import OurFeature from "@/components/AboutUs/OurFeature";
import OurMission from "@/components/AboutUs/OurMission";
import ShareOnInstagram from "@/components/AboutUs/SharedOnInstagram";
import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";


export default function AboutUs() {
  return <section>
    <Header/>
    <AboutUsBanner>About Us</AboutUsBanner>
    <Description/>
    <OurMission>Our Mission</OurMission>
    <OurFeature/>
    <MeetTheTeam/>
    <ShareOnInstagram/>
    <Footer/>
  </section>;
}
