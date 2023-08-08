import * as Common from "../style/Common"
import styled from 'styled-components';


function Career(){

    const CareerItem = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        font-size: 1em;
    `

    return(
        <Common.Section>
            <p className='title'>Career</p>
            <CareerItem>
                <p>스타트원</p>
                <p>2021.11 ~ 2022.08</p>
            </CareerItem>
            <CareerItem>
                <p>서우엠에스</p>
                <p>2022.09 ~ 2022.02</p>
            </CareerItem>
        </Common.Section>
    )
}

export default Career