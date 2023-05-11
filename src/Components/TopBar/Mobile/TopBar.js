import Style from "./TopBar.module.css"
import MenuBar from "../../MenuBar/Mobile/MenuBar";
import SearchBox from "../../SearchBox/SearchBox";
import Button from "../../Button/Button";
import addImage from '../../../style/image/add.png'

import { connect } from 'react-redux';
import {AddItem, DeleteItem} from "../../../action/ItemAction"


function TopBar(props) {

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
        
        props.setOpenBar(!props.OpenBar)
        props.setIdWorkspace(Key)
        
        props.AddItemAction(item)
    }

    return (
      <div className={Style.TopBar}>
          <div style={{display:!props.OpenBar?"none":"flex"}} className={Style.TopBar_100}>
                <MenuBar
                    IdWorkspace={props.IdWorkspace} 
                    setOpenBar={props.setOpenBar}
                    setIdWorkspace={props.setIdWorkspace}
                />
          </div>
          <div style={{display:props.OpenBar?"none":"flex"}}  className={Style.TopBar_100} >

                <Button 
                  image={addImage}
                  Fun={disableAddItem}

                />

                <SearchBox
                  setSearch={props.setSearch}
                  Search={props.Search}
                />
                

          </div>

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
  )(TopBar);