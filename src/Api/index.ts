import axios from "axios";

export async function performGetRequest(url: string) {
  try {
    const result = await axios.get(url);
    const data = result && result.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}


