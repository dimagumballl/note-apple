import Style from "./ListItem.module.css"
import Item from "../Item/Item"

function ListItem(props) {
    return (
      <div className={Style.ListItem}>
          {
            
            Object.keys(props.item).map((id)=>
            <div key={id}>

                <Item Fan={props.setOpenBar}
                  data={props.item[id]}
               />

            </div>
            
              
            )
          }
          
          


      </div>
    );
  }
  
  export default ListItem;
  