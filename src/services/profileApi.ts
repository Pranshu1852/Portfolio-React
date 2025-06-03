import { instance } from './axiosInstance';

export async function getDetails() {
  try {
    const response = await instance.get('/detail?populate=*');

    return response.data;
  } catch (error) {
    console.error('Error: ', error);
  }
}
