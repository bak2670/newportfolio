import * as Common from "../style/Common"
import * as Express from "../style/Express"
import data from "../data.json";
import { useEffect } from "react";

interface Iproject{
    id:number,
    company:String,
    companydate:String,
    companycontent:String
}

function Project(){
    


    useEffect(()=>{
        console.log(typeof(data))
    },[])
    return(
        <Common.Section>
            <p className='title'>Project</p>
            <Express.ExpressItem>
                <Express.Company>
                        <p className="company-name">스타트원<span className="company-date">2021.11 ~ 2022.08</span></p>
                        <p className="company-content">B2B 웹 에이전시 회사로 여러 업체들과 협업을 경험해볼 수 있었다.</p>
                </Express.Company>
                <Express.Express>
                    <Express.ExpressName>
                        <p className="express-name">한국선급 e-Ship</p>
                        <p className="express-date">2022-03 ~ 04</p>
                    </Express.ExpressName>
                    <Express.ExpressContent>
                    <ul>
                        <li>관리자 페이지 e-Ship 퍼블리싱</li>
                        <li>외부 디자인 회사와 협업 이후 다음 프로젝트 제안 확보</li>
                        <li>HTML CSS jquery를 사용</li>
                    </ul>
                    </Express.ExpressContent>
                </Express.Express>

            </Express.ExpressItem>

 

        </Common.Section>
    )
}

export default Project