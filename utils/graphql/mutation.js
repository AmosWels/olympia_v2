import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
    mutation login {
        login(email:$email, password:$password){
            email
            password
            token
            firstname
        }
    }
`;

const REGISTER_MUTATION = gql`
    mutation register($email:String, $firstName: String, $surname: String, $gender:String, $password: String) {
        register(email:$email, firstname:$firstname, surname:$surname,  gender:$gender, password:$password){
            email
            firstname
            surname
            gender
            password
            token
        }
`;

export { LOGIN_MUTATION, REGISTER_MUTATION };