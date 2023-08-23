import styled from 'styled-components';

export const OtherExpressItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    .name{
        font-size: 0.88em;
        width: 100%;
        text-align: left;
        margin-top: 3px;
        font-weight:bold;
        margin-bottom: 10px;
    }
`

export const ItemName = styled.div`
    width: 50%;
    & img{
        width: 100%;
    }
    & p{

    }
    @media all and (max-width:768px) {
    width: 100%;
}
`

export const ItemContent = styled.div`
    width: 50%;
    padding-left: 20px;
    @media all and (max-width:768px) {
    width: 100%;
    padding-left: 0px;

}

`

export const Slider = styled.div`
width: 100%;
margin: 50px 0;
`

export const SlideItem = styled.div`
    & a {
        width: 100%;
        & img{
            width: 100%
        }
    }
`