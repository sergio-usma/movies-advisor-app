import { PopularShowItem } from './PopularShow.jsx';
import style from '../styles/popularshowlist.module.css';

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={style.title}>You'll probably like :</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={style.tv_show_item} key={tvShow.id}>
              <PopularShowItem
                onClick={onClickItem}
                tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
