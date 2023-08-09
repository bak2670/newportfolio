import styled from 'styled-components';


export const ExpressItem = styled.div`
    width: 100%;
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;

    &:last-child{
        border-bottom: none;
    }

`
export const Company = styled.div`
    width: 100%;
    & .company-name{
        font-size: 1.2em;
    }
    & .company-date{
        font-size: 0.58em;
        color: gray;
        margin-left: 5px;
    }
    & .company-content{
        font-size: 0.88em;
        margin-top: 3px;
    }
`


export const Express = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    

`

export const ExpressName = styled.div`
    width: 30%;
    & .express-name{
        font-size: 0.88em;
    }
    & .express-date{
        font-size: 0.76em;
    }
`

export const ExpressContent = styled.div`
    width: 70%;
    font-size: 0.88em;
    padding-left: 5%;
`