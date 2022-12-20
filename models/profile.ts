
export interface DataProfile {
  name: string;
  about: string;
  phone: string;
  email: string;
  address: string;
  experience: Experience[];
  skills: ISkill[];
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  img: string;
  technologies: string[];
}

export interface ISkill {
  technology: string;
  level: number;
}

export interface Experience {
  occupation: string;
  bussiness: string;
  img_url: string;
  technologies: string[];
  work_from: string;
  work_to: string;
  activities: string[];
}