import style from '../styles/popular_show.module.css';
import { SMALL_IMG_COVER_BASE_URL } from '../api/api_config.js';
const MAX_TITLE_CHAR = 20;

export function PopularShowItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={style.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={style.img}
      />
      <div className={style.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + '...'
          : tvShow.name}
      </div>
    </div>
  );
}
