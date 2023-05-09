import Style from "./Sidebar.module.css"
import ListItem from "../../ListItem/ListItem";

function Sidebar( props) {
    return (
      <div className={Style.Sidebar}>
          <ListItem
            setOpenBar={props.NewOption}
            item={props.item}
          />
      </div>
    );
  }
  
  export default Sidebar;
  