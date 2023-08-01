import style from './styles/style.module.css';
import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tmdb_api.js';
import { BACKDROP_URL } from './api/api_config.js';
import { TVShowDetail } from './components/TVShow.jsx';
import Logo from './assets/tv_logo.png';
export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShows = await TVShowAPI.fetchPopulars();
    if (popularTVShows.length > 0) {
      setcurrentTVShow(popularTVShows[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

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
      <div className={style.recommended_shows}>Recommended tv shows</div>
    </div>
  );
}
