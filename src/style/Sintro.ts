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
    font-size: 0.88em;
`

export const IntroContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    /* border:1px solid gold; */
`

export const IntroImage = styled.div`
    /* border:1px solid deeppink; */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    & img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
    }
    @media all and (max-width:768px) {
        & img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
    }
    @media all and (max-width:400px) {
        & img{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
    }
    }
}
    
`

export const Contact = styled.div`
    /* border:1px solid skyblue; */
    margin-left: 20px;
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

    & span{
        border-bottom:0.05em solid rgba(55,53,47,0.4);opacity:0.7
    }
    & span:hover{
        border-bottom:0.05em solid black; opacity: 1;

    }

    @media all and (max-width:768px) {
        font-size: 0.77em;
    }
    @media all and (max-width:600px) {
        font-size: 0.70em;
    }
    @media all and (max-width:360px) {
        font-size: 0.66em;
    }

`
