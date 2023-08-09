import styled from 'styled-components';

export const OtherExpressItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
`

export const ItemName = styled.div`
    width: 50%;
    & img{
        width: 100%;
    }
    & p{
        font-size: 0.88em;
        text-align: center;
        margin-top: 3px;
        font-weight:bold;
    }
`

export const ItemContent = styled.div`
    width: 50%;
    padding-left: 20px;

`