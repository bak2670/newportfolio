import * as Common from "../style/Common"
import * as Express from "../style/Express"
import data from "../data.json";
import { useEffect, useState } from "react";
import {ProjectList} from "../model/data"


const Project:React.FC= ()=>{

    const ProjectItem:ProjectList = data;


    return(
        <Common.Section>
            <p className='title'>Project</p>
            {/* <Express.ExpressItem>
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

            </Express.ExpressItem> */}

            {
                ProjectItem?.projectlist.map((item:any,idx:any)=>{
                    return(
                        <Express.ExpressItem>
                        <Express.Company>
                                <p className="company-name">{item.company}<span className="company-date">{item.companydate}</span></p>
                                <p className="company-content">{item.companycontent}</p>
                        </Express.Company>
                        {
                            item.project.map((project:any,idx:number)=>{
                                return(
                                    <Express.Express>
                                    <Express.ExpressName>
                                        <p className="express-name">{project.projectname}</p>
                                        <p className="express-date">{project.projectdate}</p>
                                    </Express.ExpressName>
                                    <Express.ExpressContent>
                                    <ul>
                                        {
                                            project.projectcontent.map((projectcontent:any,idx:number)=>{
                                                return(
                                                    <li>
                                                        {projectcontent}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    </Express.ExpressContent>
                                </Express.Express>
                                )
                            })
                        }
                    </Express.ExpressItem>
                    )
                })
            }

 

        </Common.Section>
    )
}

export default Project