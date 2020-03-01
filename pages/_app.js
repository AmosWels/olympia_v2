import React from "react";  
// import Head from "next/head";  
// import "../assets/css/style.css";  
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import Layout from "../components/Layout";



const App = ({ Component, pageProps, apollo }) => {  
  return (
    <ApolloProvider client={apollo}>
        <Layout>
         <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);