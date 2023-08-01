import style from './styles/style.module.css';
import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tmdb_api.js';
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
    <div className={style.main_container}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo here</div>
            <div>subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: '100%' }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>Tv show detail</div>
      <div className={style.recommended_shows}>Recommended tv shows</div>
    </div>
  );
}
