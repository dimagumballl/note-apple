import Style from "./Item.module.css"

function Item(props) {
    return (
      <div className={Style.Item} onClick={()=>props.Fan(props.data.id)} key={props.data.id}>
          {props.data.id}
      </div>
    );
  }
  
  export default Item;
   