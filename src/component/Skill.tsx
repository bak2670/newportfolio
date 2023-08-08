import * as Common from "../style/Common"
import styled from 'styled-components';
function Skill(){

    const SkillItemBox = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 5px;

        &.back{color:blue}
        &.front{color:green}
        &.git{color:purple}
    `
    const SkillItem = styled.div`
        padding: 2px 5px;
        background-color: #eee;
        margin-left: 5px;
        font-size: 0.77em;

        &:first-child{
            margin-left: 0px;
        }

        
        
    `
    return(
        <Common.Section>
            <p className='title'>Skill</p>
            <SkillItemBox className="front">
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Redux</SkillItem>
                <SkillItem>Next.js</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS</SkillItem>
                <SkillItem>Style-Componet</SkillItem>
            </SkillItemBox>
            <SkillItemBox className="back">
                <SkillItem>Node.js</SkillItem>
                <SkillItem>MySQL</SkillItem>
            </SkillItemBox>
            <SkillItemBox className="git">
                <SkillItem>Git</SkillItem>
            </SkillItemBox>
        </Common.Section>
    )
}

export default Skill