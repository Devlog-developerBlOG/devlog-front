export interface ProfileType {
  accountIdx: number;
  email: string;
  name: string;
  profileUrl?: string;
  company?: string;
  githubUrl?: string;
  readme?: string;
  isMine: boolean;
}

export interface CalendarType {
  postCount: number;
  date: string;
}
