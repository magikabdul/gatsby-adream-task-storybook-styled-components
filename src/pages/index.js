import React from 'react'
import 'src/styles/_app.css'
import Layout from 'src/components/layout/Layout'
import HeroSection from 'src/components/views/HeroSection/HeroSection'
import OfferSection from 'src/components/views/OfferSection/OfferSection'
import LocationSection from 'src/components/views/LocationSection/LocationSection'
import OwnOfficeSection from 'src/components/views/OwnOfficeSection/OwnOfficeSection'
import NewsSection from 'src/components/views/NewsSection/NewsSection'

const MainPage = () => (
  <Layout>
    <HeroSection />
    <OfferSection />
    <LocationSection />
    <OwnOfficeSection />
    <NewsSection />
  </Layout>
)

export default MainPage
