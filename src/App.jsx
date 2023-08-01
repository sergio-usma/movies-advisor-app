import style from './styles/style.module.css';
import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tmdb_api.js';
import { BACKDROP_URL } from './api/api_config.js';
import { TVShowDetail } from './components/TVShow.jsx';
import Logo from './assets/tv_logo.png';
import { TVShowList } from './components/PopularShowList.jsx';

export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();
  const [recommendedTVShows, setrecommendedTVShows] = useState([]);

  async function fetchPopulars() {
    const popularTVShows = await TVShowAPI.fetchPopulars();
    if (popularTVShows.length > 0) {
      setcurrentTVShow(popularTVShows[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendationListResp.length > 0) {
      setrecommendedTVShows(recommendationListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

 function handleTVShowClick(tvShow) {
    setcurrentTVShow(tvShow);
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
            <div className={style.logo_container}>
              <img className={style.logoImg} src={Logo} alt="Logo NinjaTV" />
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: '100%' }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommended_shows}>
        {currentTVShow && <TVShowList onClickItem={handleTVShowClick} tvShowList={recommendedTVShows} />}
      </div>
    </div>
  );
}
