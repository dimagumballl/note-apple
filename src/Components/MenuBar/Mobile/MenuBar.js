import Style from "./MenuBar.module.css"
import Button from "../../Button/Button"
import backImage from '../../../style/image/back.png'
import deleteImage from '../../../style/image/delete.png'
import { connect } from 'react-redux';
import { DeleteItem} from "../../../action/ItemAction"

function MenuBar( props) {

  function disableDeleteItem(){
    if(Object.keys(props.item).length!=0){
      let CopyObject = {}
      for(const property in props.item){
      
        if( property!=props.IdWorkspace){
          CopyObject={
            ...CopyObject,
            [property]:props.item[property]
          }
        }
      }
      props.DeleteItemAction(CopyObject)
      props.setOpenBar()
      
      if(Object.keys(CopyObject).length!=0){
     
        props.setIdWorkspace(Object.keys(CopyObject)[0])
      }
    }
    
      
  }
    return (
      <div className={Style.MenuBar}>
          <Button 
            Fun={props.setOpenBar}
            image={backImage}
          />
          
          <Button
          Fun={disableDeleteItem}
             image={deleteImage}
          />
      </div>
    );
  }
  

  const mapStateToProps = (store) => {

    return {
      item: store.item,
  
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      AddItemAction: (item) => dispatch(AddItem(item)), 
      DeleteItemAction: (id) => dispatch(DeleteItem(id)),
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuBar);