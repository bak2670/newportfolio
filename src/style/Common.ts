import styled from 'styled-components';

export const Section = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    padding: 20px 0px;

    width: 50%;
    margin: 0 auto;
    padding-top: 80px;

    @media all and (min-width:768px) {
    min-width: 768px;

}

& .title{
    color: red;
    font-size: 2em;
    padding-bottom:20px;
    position: relative;
    border-bottom: 2px solid black;


}
& .text{
    color: blue;
    font-size: 1em;
    padding: 10px 0px;
}
`