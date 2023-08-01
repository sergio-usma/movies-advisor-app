import axios from 'axios';
import { BASE_URL, CATEGORY, SUB_CATEGORY, API_KEY } from './api_config.js';

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}${CATEGORY}${SUB_CATEGORY}${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}${CATEGORY}/${tvShowId}/recommendations${API_KEY}`,
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}/search/tv?query=${title}&api_key=4309a1a8fbc043e11ef87aa7e5c90093`,
    );

    return response.data.results;
  }
}
