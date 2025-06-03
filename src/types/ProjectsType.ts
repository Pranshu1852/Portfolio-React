export type CategoriesType =
  | 'All'
  | 'Website'
  | 'Package'
  | 'Extension'
  | 'PWA';

export interface Project {
  title: string;
  image: string;
  category: CategoriesType;
}

export interface ProjectData {
  documentId: string;
  title: string;
  description: string;
  githublink: string;
  livelink: string;
  category: {
    title: CategoriesType;
  };
  image: {
    url: string;
  };
}
