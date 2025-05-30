import { instance } from './axiosInstance';

export async function getDetails() {
  try {
    const response = await instance.get('/detail');

    return response.data;
  } catch (error) {
    console.error('Error: ', error);
  }
}
