import { PopularShowItem } from './PopularShow.jsx';
import style from '../styles/popularshowlist.module.css';

export function TVShowList({ tvShowList }) {
  return (
    <div>
      <div className={style.title}>You'll probably like :</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={style.tv_show_item} key={tvShow.id}>
              <PopularShowItem tvShow={tvShow} onClick={() => console.log('todo')} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
