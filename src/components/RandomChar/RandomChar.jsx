import styles from "./RandomChar.module.css"

function RandomChar({onSearch}) {

  return (
      <button className={styles.random} onClick={()=>{onSearch(Math.ceil(Math.random() * 826))}}>
        Random
      </button>
  );
}

export default RandomChar;


