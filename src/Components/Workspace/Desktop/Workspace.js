import Style from "./Workspace.module.css"
import { connect } from 'react-redux';

function Workspace(props) {
    return (
      <div className={Style.Workspace}>

          <textarea value={props.item[props.IdWorkspace].text}/> 
      </div>
    );
  }
  

  const mapStateToProps = (store) => {

    return {
      item: store.item,
  
    };
  };
  export default connect(mapStateToProps)(Workspace)
  