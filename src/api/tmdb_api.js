import axios from 'axios';
import { BASE_URL, CATEGORY, SUB_CATEGORY, API_KEY } from './api_config.js';

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}${CATEGORY}${SUB_CATEGORY}${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
