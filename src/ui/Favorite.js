import './Favorite.css'

export default function Favorite(props) {

  const clickHandler = () => {
    
  }

  return (
    <div className={props.favorite}>
      <span class="material-symbols-outlined" onClick={clickHandler}>star</span>
    </div>
  );
}
