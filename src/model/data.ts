// interface
// type

// export type projectdata = 
//     // projectlist:[
//         {
//             id:number,
//             company:string,
//             companydate:string,
//             companycontent:string,
//             project:[
//                 {
//                     projectid:number,
//                     projectname:string,
//                     projectdate:string,
//                     projectcontent:string[]
//                 }
//             ]
//         }
//     // ]
// // } 

interface Project {
    projectid: number;
    projectname: string;
    projectdate: string;
    projectcontent: string[];
  }
  
  interface ProjectData {
    id: number;
    company: string;
    companydate: string;
    companycontent: string;
    project: Project[];
  }
  
  export interface ProjectList {
    projectlist: ProjectData[];
  }
