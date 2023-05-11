import Style from "./MenuBar.module.css"
import Button from "../../Button/Button"
import deleteImage from '../../../style/image/delete.png'
import addImage from '../../../style/image/add.png'
import downImage from '../../../style/image/down.png'
import { connect } from 'react-redux';
import {AddItem, DeleteItem} from "../../../action/ItemAction"
import {GetAllState} from '../../../action/ItemAction'

function MenuBar( props) {

    function disableAddItem(){
      let isFindNewKey = false
      let isTheSameKay = true
      let Key = 0
      while (isFindNewKey==false) {
        let min = 0
        let max = 1000000
        min = Math.ceil(min);
        max = Math.floor(max);
        Key = Math.floor(Math.random() * (max - min) + min)
        isTheSameKay = false
        for (let index = 0; index < Object.keys(props.item).length; index++) {
          if(Object.keys(props.item)[index]==Key)
            isTheSameKay= true
          
        }
        if(!isTheSameKay)
          isFindNewKey=true
      }
      var date = new Date().toLocaleString() 
      let item = {
            id: Key,
            date: date,
            text:"New Note",
        }
        if(Object.keys(props.item).length==0){
          props.NewOption(Key)
        }
        props.AddItemAction(item)
        
    }
    
    function disableDeleteItem(){
      let CopyObject = {}
      for(const property in props.item){
        
        if( property!=props.IdWorkspace){
          CopyObject={
            ...CopyObject,
            [property]:props.item[property]
          }
        }
      }
        props.DeleteItemAction(props.IdWorkspace)
        if(Object.keys(CopyObject).length!=0){
          props.NewOption(Object.keys(CopyObject)[0])
        }
    }
    

 
    return (
      <div className={Style.MenuBar}>
          <Button
            image={addImage}
            Fun={disableAddItem}
          />
          <Button
            image={deleteImage}
            Fun={disableDeleteItem}
          />
          <Button

            image={downImage}
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
      GetAllState:()=>dispatch(GetAllState()),
      AddItemAction: (item) => dispatch(AddItem(item)), 
      DeleteItemAction: (id) => dispatch(DeleteItem(id)),
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuBar);
