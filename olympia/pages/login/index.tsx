import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
type Props = {
    pathname: string
  }

const IndexPage: React.FunctionComponent = () => (
<Layout title="Login">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
      <Link href="/">
        <a>Go home</a>
      </Link>
  </Layout>
)

export default IndexPage