import * as Common from "../style/Common"
import * as Other from "../style/OtherExpress"
import animal from "../Image/animal.png"
import tour from "../Image/tour.png"
import mygpt from "../Image/mygpt.png"
import logo from './logo.svg';


function OtherExpress() {

    return (
        <Common.Section>
            <p className='title'>OtherProject</p>

            <Other.OtherExpressItem>
                <p className="name">나만의 GPT</p>
                <Other.ItemName>
                    <a href="https://www.youtube.com/watch?v=qiAc4jwMabk"><img src={mygpt} alt="dd" /></a>
                </Other.ItemName>
                <Other.ItemContent>
                    <p>
                        친구와 대화하듯 여러 대화창을 만들어 사용 할 수 있는 나만의 GPT입니다.<br></br>
                        OpenAi에서 API통신을 통해 질문을 하고 대답을 받을 수 있습니다.<br />
                        AI시장에 관심이 생기고 다방면으로 사용이 가능할거같아 프로젝트를 진행했습니다.
                    </p>
                </Other.ItemContent>
            </Other.OtherExpressItem>

            <Other.OtherExpressItem>
            <p className="name">12지신 연애유형</p>
                <Other.ItemName>
                    <a href="https://beackanimaldatingtype.netlify.app/"><img src={animal} alt="dd" /></a>
                </Other.ItemName>
                <Other.ItemContent>
                    <p>
                        처음으로 자바스크립트를 이용해 개발을 진행한 프로젝트입니다.<br></br>
                        사전에 설정해 놓은 12가지 질문에 대답을 하고 해당 결과에 따라 사용자의 연애유형과 알맞는 동물을 알려줍니다!
                    </p>
                </Other.ItemContent>
            </Other.OtherExpressItem>

            <Other.OtherExpressItem>
            <p className="name">투어리스트 클론코딩</p>
                <Other.ItemName>
                    <a href="https://silly-raman-a73389.netlify.app"><img src={tour} alt="dd" /></a>
                </Other.ItemName>
                <Other.ItemContent>
                    <p>
                        국비과정 시절 처음 HTML CSS 수업 후 첫 과제로 반응형 클론코딩을 진행했던 웹 사이트입니다.<br />
                        이 프로젝트를 진행하며 반응형 웹사이트가 어떻게 만들어지는지를 알게 됐고 원하는 대로 그려지는 UI를 보며 처음으로 개발 쪽에 흥미를 가질 수 있게 만들어준 프로젝트입니다.

                    </p>
                </Other.ItemContent>
            </Other.OtherExpressItem>

        </Common.Section>
    )
}

export default OtherExpress