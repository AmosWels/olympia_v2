import ApolloClient from "apollo-boost";
 
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${sessionStorage.getItem("token")}`
      }
    });
  }

});