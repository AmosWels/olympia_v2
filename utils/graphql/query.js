import React from "react";  
import { useQuery } from "@apollo/react-hooks";

const JOBS_QUERY = gql`
  query profile{
    profile{
      firstname
      surname
      email
      gender
    }
  }
  `
  // the hook that calls the query.
  // const jobs = useQuery(JOBS_QUERY)
export default JOBS_QUERY;  