import { gql } from 'apollo-boost';

export const REGISTER_MUTATION = gql`
    mutation register($email:String!, $firstname: String!, $surname: String!, $gender:String!, $password: String!) {
        register(email:$email, firstname:$firstname, surname:$surname,  gender:$gender, password:$password){
            email
            firstname
            surname
            gender
            password
            token
        }
    }
`;