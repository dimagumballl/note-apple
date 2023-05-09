import Style from "./Button.module.css"

function Button(props) {
    return (
      <div className={Style.Button} onClick={props.Fun}>
          
      </div>
    );
  }
  
  export default Button;
  