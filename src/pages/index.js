import React from "react"
import 'src/styles/_app.css'
import styled from 'styled-components';
import Layout from "src/components/layout/Layout"

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.yellow};
`

const MainPage = ({ children }) => (
  <>
    <Layout>
      {children}
      <div>hello</div>
      <Test/>
    </Layout>
  </>
)

export default MainPage;
