// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import BannerSection from "../components/BannerSection/BannerSection";
import EventsSection from "../components/EventsSection/EventsSection";
import OrganiserSection from "../components/OrganiserSection/OrganiserSection";
import SponsorSection from "../components/SponsorSection/SponsorSection";
import ComingSoonSection from "../components/ComingSoonSection/ComingSoonSection";
import TeamSection from "../components/TeamSection/TeamSection";
import BottomSection from "../components/BottomSection/BottomSection";
import Footer from "../components/Footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <HeroSection />
            <BannerSection />
            <EventsSection />
            <OrganiserSection />
            <SponsorSection />
            <ComingSoonSection />
            {/* <TeamSection /> */}
            <BottomSection />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;