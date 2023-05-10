import Style from "./Workspace.module.css"
import { connect } from 'react-redux';
import {setText, AddItem} from "../../../action/ItemAction"

function Workspace(props) {
  function handleChange(event) {

    if(props.item[props.IdWorkspace]!=undefined)
      props.setTextAction({id:props.IdWorkspace,text:event.target.value})
    else{
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
            text:event.target.value,
        }
        props.AddItemAction(item)
        props.setIdWorkspace(Key)
    }
    
  }
    return (
      <div className={Style.Workspace}>
          
          <textarea value={props.item[props.IdWorkspace]!==undefined?props.item[props.IdWorkspace].text:""} onChange={handleChange}/> 
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
      setTextAction: (text) => dispatch(setText(text)), 
      AddItemAction: (item) => dispatch(AddItem(item))
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Workspace);
 
  