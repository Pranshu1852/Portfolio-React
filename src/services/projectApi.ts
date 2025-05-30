import type { CategoriesType } from '../types/ProjectsType';

import { instance } from './axiosInstance';

export async function getProjects(category: CategoriesType) {
  try {
    const endPoint = `/projects?${category !== 'All' ? `filters[category][title][$eqi]=${category}&populate=*` : 'populate=*'}`;
    const response = await instance.get(endPoint);

    return response.data;
  } catch (error) {
    console.error('Error: ', error);
  }
}

export async function getProject(id: string) {
  try {
    const endPoint = `/projects/${id}?populate=*`;
    const response = await instance.get(endPoint);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
