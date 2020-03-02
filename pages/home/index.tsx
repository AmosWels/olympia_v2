import * as React from "react";
import Layout from "../../components/Layout";
import { ProfileComponent } from "../../generated/apolloComponents";
import HomePage from "./homePage";
import  Router from "next/router";
import { Spinner } from "react-bootstrap";

export default () => {
  const handleClick=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    localStorage.removeItem('token')
    Router.push('/')
  }
  return (
    <Layout title="Home page">
      <ProfileComponent>
        {({ data }) => {
          return (<div>{data && data.profile ?
            (<HomePage
              firstname={data.profile.firstname}
              surname={data.profile.surname}
              email={data.profile.email}
              gender={data.profile.gender}
              handleClick={handleClick}
            />) : (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true" />
            )
            }
          </div>);
        }}
      </ProfileComponent>
    </Layout>
  );
};