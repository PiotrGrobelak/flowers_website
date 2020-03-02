import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo";
import styled from "styled-components"

const Main = styled.main`
height:1000px;
`;



const IndexPage = () => (

  <>
    <Main>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>You are main page</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Main>
  </>

)

export default IndexPage
