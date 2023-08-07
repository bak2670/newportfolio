import logo from '../logo.svg';
import * as Concact from "../style/Sintro"
import * as Common from "../style/Common"
function Contact(){
    return(
      <Common.Section>
        <Concact.Greetings>
            <p>프론트엔드 개발자 백승철입니다.</p>
        </Concact.Greetings>
        <Concact.IntroContent>
          <Concact.IntroImage>
              <img src={logo}/>
            </Concact.IntroImage>
            <Concact.Contact>
              <Concact.ContactTitle>
                Contact
              </Concact.ContactTitle>
              <Concact.ContactItem>
                <p>Email : </p>
                <p>bak2670@gmail.com</p>
              </Concact.ContactItem>
              <Concact.ContactItem>
                <p>Git : </p>
                <p><a href="https://github.com/bak2670">https://github.com/bak2670</a></p>
              </Concact.ContactItem>
              <Concact.ContactItem>
                <p>Phone : </p>
                <p>010-2670-5829</p>
              </Concact.ContactItem>
            </Concact.Contact>
          </Concact.IntroContent>
        </Common.Section>
    )
}

export default Contact
