import Style from "./Sidebar.module.css"
import ListItem from "../../ListItem/ListItem";

function Sidebar(props) {
    return (
      <div className={Style.Sidebar} style={{display:props.OpenBar?"none":"flex"}}>
          <ListItem
            
            setOpenBar={props.setOpenBar}
            item={props.item}
          />
      </div>
    );
  }
  
  export default Sidebar;
  