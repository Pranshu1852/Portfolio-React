export interface TimeLineType {
  title: string;
  organization: string;
  period: string;
}

export interface skillsType {
  name: string;
  percentage: number;
}

export interface PersonDetails {
  name: string;
  profession: string;
  email: string;
  phone: string;
  birthday: string;
  aboutme: string;
  education: TimeLineType[];
  experience: TimeLineType[];
  skill: skillsType[];
}
