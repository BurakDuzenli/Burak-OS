export interface PersonalInfo {
  name: string;
  dateOfBirth: string;
  occupation: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}
