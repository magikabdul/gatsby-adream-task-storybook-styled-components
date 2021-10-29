import React from "react"
import "src/styles/_app.css"
import styled from "styled-components"
import Layout from "src/components/layout/Layout"
import ArrowIcon from "src/assets/svg/arrow-left-solid.svg"
import FacebookIcon from "src/assets/svg/facebook.svg"

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.yellow};
`

const MainPage = ({ children }) => (
  <>
    <Layout>
      {children}
      <h1>header h1</h1>
      <h2>header h2</h2>
      <h3>header h3</h3>
      <h4>header h4</h4>
      <p>hello</p>
      <ArrowIcon style={{ width: "100px", height: "100px" }} color={"yellow"} />
      <FacebookIcon style={{ width: "100px", height: "100px" }} color={"green"} />
      <Test />

    </Layout>
  </>
)

export default MainPage
