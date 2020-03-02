
  import { gql } from 'apollo-boost';

export const PROFILE_QUERY = gql`
    query profile{
        profile{
        firstname
        surname
        email
        gender
        }
    }
`;