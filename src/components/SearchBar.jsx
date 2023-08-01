import style from "../styles/searchbar.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim()!=="") {
      onSubmit(e.target.value)
    }
  }
  return (
    <>
      <SearchIcon size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        className={style.input}
        type="text"
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
}
