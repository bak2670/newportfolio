import logo from '../logo.svg';
import * as Concact from "../style/Sintro"
import * as Common from "../style/Common"
function Intro(){
    return(
          <Common.Section>
            <p className='title'>Introduce</p>
            <p className='text'>학습에서 즐거움을 찾는 개발자 정윤호입니다.<br/><br/>
              “사람들과 함께 학습하며 성장하자”라는 모토를 갖고 웹 개발과 관련된 다양한 분야를 학습 중입니다. <br/><br/>
              다양한 학습 환경을 만드는 것을 좋아하며 성장하는 습관을 만들어 가고 있습니다.<br/><br/>
              사람들과 함께 학습하며 성장하기 위해 지난 2년간 4개의 개발교육 프로그램에 참여하여 동료들과 학습을 공유하고 함께 프로젝트를 진행하며 개발 역량을 쌓아왔습니다.<br/><br/>
              또한 꾸준한 개발 성장 습관을 만들기 위해 자바스크립트, 리액트, 알고리즘 분야로 지난 1년간 약 10개의 스터디를 운영 및 참여하여 학습을 해야 하는 환경과 잘 할 수 있는 환경을 만들기 위해 노력해왔습니다.<br/><br/>
              그리고 학습을 하면서 학습했던 내용들을 벨로그에 꾸준히 기록하여 약 200개 이상의 포스팅을 남겼습니다.
            </p>
          </Common.Section>
    )
}

export default Intro
