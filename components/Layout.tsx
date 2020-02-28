import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  title?: string
}

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Layout: React.FunctionComponent<Props> = ({
  title = 'This is the default title',
  children
}) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    {children}
  </Wrapper>
)

export default Layout
