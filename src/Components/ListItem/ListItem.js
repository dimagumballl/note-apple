import Style from "./ListItem.module.css"
import Item from "../Item/Item"

function ListItem(props) {

  
  function filter(){

    let filteredObject = {}
    let filterArray = props.Search.split("")

    for(const id in props.item){
      
      let check = true
      

      for (let index = 0; index < filterArray.length; index++) {
        if(props.item[id].text.split("")[index]!=undefined)
          if(props.item[id].text.split("")[index].toLowerCase()!=filterArray[index].toLowerCase()){
            check=false
          
        }
          
      }
      if(check)
      filteredObject={
        ...filteredObject,
        [id]:props.item[id]
      }
      
    }

    return (
      Object.keys(filteredObject).map((id)=>
      <div key={id}>
          <Item Fan={props.setOpenBar} data={filteredObject[id]}/>
      </div>)
    ) 
    
  }
    return (
      <div className={Style.ListItem}>
          {
            filter()
          }
      </div>
    );
  }
  
  export default ListItem;
  