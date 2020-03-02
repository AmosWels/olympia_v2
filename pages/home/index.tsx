import * as React from "react";
import Layout from "../../components/Layout";
import { ProfileComponent } from "../../generated/apolloComponents";
import HomePage from "./homePage";

export default () => {
  return (
    <Layout title="Hello page">
      <ProfileComponent>
        {({ data }) => {
          return (<div>{ data && data.profile ? "loading..."
            : (<HomePage data={data} />)}
            {console.log('>>>>', data)}
          </div>);
        }}
      </ProfileComponent>
    </Layout>
  );
};