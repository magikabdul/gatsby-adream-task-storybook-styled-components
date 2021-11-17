import React from 'react'
import 'src/styles/_app.css'
import Layout from 'src/components/layout/Layout'
import HeroSection from 'src/components/views/HeroSection/HeroSection'
import OfferSection from 'src/components/views/OfferSection/OfferSection'

const MainPage = () => (
  <Layout>
    <HeroSection />
    <OfferSection />
  </Layout>
)

export default MainPage
