import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const CATEGORY = '/tv';
const SUB_CATEGORY = '/popular';
const API_KEY = '?api_key=4309a1a8fbc043e11ef87aa7e5c90093';
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}${CATEGORY}${SUB_CATEGORY}${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
