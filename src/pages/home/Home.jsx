import React from "react";
import Navbar from "../../components/Seo";
import Header from "../../components/Header";
import About from "./About";
import Features from "./Features.jsx";
import Sponsors from "./Sponsors.jsx";
import Present from "./Present.jsx";
import Testi from "./Testi.jsx";
import Pricing from "./Pricing.jsx";
import Blog from "./Blog.jsx";
import Maps from "./Maps.jsx";
import Kontact from "./Kontact.jsx";
import Footer from "../../components/Footer.jsx";
import Cookiebanner from "../../components/CookieBanneer.jsx"
import CookieBanner from "../../components/CookieBanneer.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Features></Features>
      <Sponsors></Sponsors>
      <Present></Present>
      <Testi></Testi>
      <Pricing></Pricing>
      <Blog></Blog>
      <Maps></Maps>
      <Kontact></Kontact>
      <Footer></Footer>
      <CookieBanner></CookieBanner>
      {/* Weitere Sektionen */}
    </>
  );
}

