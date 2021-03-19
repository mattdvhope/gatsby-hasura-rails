import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UsersList from "../components/UsersList"
import AddUser from "../components/AddUser"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <AddUser/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UsersList/>
    </div>
  </Layout>
)

export default IndexPage
