export class Coach {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined; 
    token?: string;
    aboutMe?: string;
    coutntry?: string;
    state?: string;
    city?: string;
    timezone?: string;
    gender?: string;
    Accounts?: {name:string, link:string}[];
    schoolInfo?: {name:string, degree:string, specialization:string,start:string, end:string}[];
    workInfo?: {name:string, title:string, description:string,start:string, end:string}[];
    workTitle?: string;
    coachExperience?: string;
    skill?: {name:string}[];
    documents?: {type: string, title: string, orgName:string, valid: string,link:string}[];




}