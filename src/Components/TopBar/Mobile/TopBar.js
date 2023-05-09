import Style from "./TopBar.module.css"
import MenuBar from "../../MenuBar/Mobile/MenuBar";
import SearchBox from "../../SearchBox/SearchBox";
import Button from "../../Button/Button";


function TopBar(props) {
    return (
      <div className={Style.TopBar}>
          <div style={{display:!props.OpenBar?"none":"flex"}} className={Style.TopBar_100}>
                <MenuBar 
                    setOpenBar={props.setOpenBar}
                />
          </div>
          <div style={{display:props.OpenBar?"none":"flex"}}  className={Style.TopBar_100} >
                <SearchBox/>
                <Button 


                />

          </div>

      </div>
    );
  }
  

  export default TopBar;

  