import Style from "./TopBar.module.css"
import MenuBar from "../../MenuBar/Desktop/MenuBar";
import SearchBox from "../../SearchBox/SearchBox";

function TopBar() {
    return (
      <div className={Style.TopBar}>
          <div className={Style.TopBar_30}>
                <MenuBar/>
          </div>
          <div  className={Style.TopBar_70}>
                <SearchBox/>
          </div>
      </div>
    );
  }
  
  export default TopBar;
  