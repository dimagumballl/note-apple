import Style from "./Item.module.css"

function Item(props) {
    return (
      <div className={Style.Item} onClick={()=>props.Fan(props.data.id)} key={props.data.id}>
        <div className={Style.Title}>
          <input value={props.data.text} readOnly />
            
          
          
        </div>
        <div className={Style.Date}>
          {props.data.date}
        </div>
          
      </div>
    );
  }
  
  export default Item;
   