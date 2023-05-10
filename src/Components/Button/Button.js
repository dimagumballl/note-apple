import Style from "./Button.module.css"

function Button(props) {
    return (
      <div className={Style.Button} onClick={props.Fun}>
          <img src={props.image}/>
      </div>
    );
  }
  
  export default Button;
  