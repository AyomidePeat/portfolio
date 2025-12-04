export interface SkillItem {
    name: string;
    detail: string;
  }
  
  export interface SkillCategory {
    category: string;
    description: string;
    items: SkillItem[];
  }
  
  export interface Responsibility {
    title: string;
    description: string; 
    skills: string[];
  }
  
  export interface ExperienceItem {
    slug: string; 
    company: string;
    image: string;
    summary: string; 
    date: string; 
    link:string
  
    fullTitle: string; 
    fullDate: string; 
    mission: string;
    responsibilities: Responsibility[];
    projects: string[];
    technicalSkills: SkillCategory[];
  }