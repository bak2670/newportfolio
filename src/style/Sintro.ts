import styled from 'styled-components';

// export const Intro = styled.div`
//     width: 50%;
//     margin: 0 auto;
//     padding-top: 80px;

//     @media all and (min-width:768px) {
//     min-width: 768px;

// }
// `

export const Greetings = styled.div`
    font-size: 2em;
`

export const IntroContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid gold;
`

export const IntroImage = styled.div`
    width: 50%;
    border:1px solid deeppink;
    display: flex;
    align-items: center;
    justify-content: center;
    & img{
        width: 250px;
        height: 250px;
        border-radius: 70%;
        border:1px solid black;
        object-fit: cover;
    }

    
`

export const Contact = styled.div`
    width: 50%;
    border:1px solid skyblue;
`

export const ContactTitle = styled.div`
    font-size: 1.5em;
    color: orange;
`

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    margin-top: 5px;

    & p:last-child{
        margin-left: 3px;

    }

    & a{
        text-decoration: none;
        color: black;
    }

`
