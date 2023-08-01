import style from './styles/style.module.css';
import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tmdb_api.js';
import { BACKDROP_URL } from './api/api_config.js';
import { TVShowDetail } from './components/TVShow.jsx';
import Logo from './assets/tv_logo.png';
import { TVShowList } from './components/PopularShowList.jsx';
import { SearchBar } from './components/SearchBar.jsx';

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert('Something went wrong when fetching the popular tv shows');
    }
  }
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert('Something went wront fetching the recommendations');
    }
  }
  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert('Something went wrong searching a tv show');
    }
  }
  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : 'black',
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <img src={Logo} alt="logo" className={style.logoImg} />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommended_shows}>
        {currentTVShow && (
          <TVShowList onClickItem={updateCurrentTVShow} tvShowList={recommendationList} />
        )}
      </div>
    </div>
  );
}
