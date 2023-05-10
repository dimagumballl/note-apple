import Style from "./SearchBox.module.css"

function SearchBox(props) {
  function handleChangeSearch(event){
    props.setSearch(event.target.value)
  }
  
    return (
      <div className={Style.SearchBox}>
          <input value={props.Search} onChange={handleChangeSearch}/>
      </div>
    );
  }
  
  export default SearchBox;
  