import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserStuff from "../components/UserStuff"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { FbLoginURL } from "../utils/FbLoginURL"



const IndexPage = () => {
  console.log(getUser())
  return (
  <Layout>
    <SEO title="Home" />
    { isLoggedIn() ? UserStuff() : <h2>Not yet logged in!!</h2> }
    <a
      href={FbLoginURL()}
    >
      Facebook Login Link
    </a>



  </Layout>
)}

export default IndexPage
