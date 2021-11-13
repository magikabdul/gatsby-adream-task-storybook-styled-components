import React from 'react'
import styled from 'styled-components'
import Typography from 'src/components/atoms/Typography/Typography'
import Layout from 'src/components/layout/Layout'
import { Link } from 'gatsby'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PageNotFound = () => (
  <Layout>
    <Container>
      <Typography variant='h1' text='Page Not Found' color='primary' fontSize='100px' fontWeight='bold' />
      <Link to='/'><Typography text='go to main page' /></Link>
    </Container>
  </Layout>
)

export default PageNotFound
