import styled from 'styled-components'

const HomeBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    padding: 40px;
    background: #f9f9f9;
    box-sizing: border-box;
    box-shadow: 0 4px 15px rgba(0,0,0,.25);
    border-radius: 25px;

    .buttonHolder {
        display: block;
        margin: 0 auto;
        width: 50%;
    }

    .ListHolder {
        display: block;
        margin: 0 auto;
        width: 80%;
    }

    .BadgeHolder {
        display: block;
        margin: 0 auto;
        width: 100%;
        font-size:16px;
    }
    .uniqueText{
        text-align: center;
        color: black;
        text-transform: uppercase;
        padding: 1px;
        font-family: 'Raleway', cursive;
        font-weight: 10;
        background: -webkit-linear-gradient(left, grey, #eee, grey);
        background: -moz-linear-gradient(left, grey, #eee, grey);
        background: -ms-linear-gradient(left, grey, #eee, grey);
        background: -o-linear-gradient(left, grey, #eee, grey);
    }
`;

export default HomeBox;