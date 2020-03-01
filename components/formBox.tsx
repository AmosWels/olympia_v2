import styled from 'styled-components'

const FormBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 40px;
    background: #f9f9f9;
    box-sizing: border-box;
    box-shadow: 0 4px 15px rgba(0,0,0,.25);
    border-radius: 25px;

    .error {
        border: 2px solid #FF6565;
        }

    .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
}
`;

export default FormBox;
