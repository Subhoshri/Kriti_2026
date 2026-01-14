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
import ArtistSection from "../components/ArtistSection/ArtistSection";
import Navbar from "../components/NavbarSection/Navbar";

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <HeroSection />
            <BannerSection />
            <EventsSection />
            <ArtistSection />
            <OrganiserSection />
            <SponsorSection />
            {/*<ComingSoonSection />*/}
            {/* <TeamSection /> */}
            <BottomSection />
            <Footer /> 
        </div>
    );
};

export default Home;