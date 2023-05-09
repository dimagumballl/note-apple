import Style from "./MenuBar.module.css"
import Button from "../../Button/Button"

function MenuBar( props) {
    return (
      <div className={Style.MenuBar}>
          <Button 
            Fun={props.setOpenBar}
            
          />
          <Button/>
          <Button/>
      </div>
    );
  }
  
  export default MenuBar;
  