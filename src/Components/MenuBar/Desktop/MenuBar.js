import Style from "./MenuBar.module.css"
import Button from "../../Button/Button"

function MenuBar() {
    return (
      <div className={Style.MenuBar}>
          <Button/>
          <Button/>
          <Button/>
      </div>
    );
  }
  
  export default MenuBar;
  