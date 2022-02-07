import React from 'react';
import 'src/styles/_app.css';
import Layout from 'src/components/layout/Layout';
import HeroSection from 'src/components/views/HeroSection/HeroSection';
import OfferSection from 'src/components/views/OfferSection/OfferSection';
import LocationSection from 'src/components/views/LocationSection/LocationSection';
import OwnOfficeSection from 'src/components/views/OwnOfficeSection/OwnOfficeSection';
import NewsSection from 'src/components/views/NewsSection/NewsSection';
import GallerySection from 'src/components/views/GallerySection/GallerySection';
import FooterSection from 'src/components/views/FooterSection/FooterSection';
import Navbar from 'src/components/molecules/Navbar/Navbar';

const MainPage = () => (
  <Layout>
    <Navbar />
    <HeroSection />
    <OfferSection />
    <LocationSection />
    <OwnOfficeSection />
    <NewsSection />
    <GallerySection />
    <FooterSection />
  </Layout>
);

export default MainPage;
