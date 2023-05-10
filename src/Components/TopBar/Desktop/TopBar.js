import Style from "./TopBar.module.css"
import MenuBar from "../../MenuBar/Desktop/MenuBar";
import SearchBox from "../../SearchBox/SearchBox";

function TopBar(props) {
    return (
      <div className={Style.TopBar}>
          <div className={Style.TopBar_30}>

                <MenuBar
                  IdWorkspace={props.IdWorkspace}
                  NewOption={props.NewOption}
                />
          </div>
          <div  className={Style.TopBar_70}>
                <SearchBox
                  setSearch={props.setSearch}
                  Search={props.Search}
                />
          </div>
      </div>
    );
  }
  
  export default TopBar;
  