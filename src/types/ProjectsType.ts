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
