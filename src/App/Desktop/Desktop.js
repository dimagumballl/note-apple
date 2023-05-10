import Style from "./Desktop.module.css"
import TopBar from "../../Components/TopBar/Desktop/TopBar";
import Sidebar from "../../Components/Sidebar/Desktop/Sidebar";
import Workspace from "../../Components/Workspace/Desktop/Workspace";
import Footer from "../../Components/Footer/Footer"
import { connect } from 'react-redux';

function Desktop(props) {

  function NewOption (id){

    props.setIdWorkspace(id)
  }

    return (
      <div className={Style.Desktop}>

          <TopBar
            IdWorkspace={props.IdWorkspace}
            NewOption={NewOption}
            setSearch={props.setSearch}
            Search={props.Search}
          />
          <div className={Style.Desktop_workspace}>
            <div className={Style.Desktop_30}>
              <Sidebar
                NewOption={NewOption}
                item={props.item}
                
              />
            </div>
            <div className={Style.Desktop_70}>
              <Workspace
                setIdWorkspace={NewOption}
                IdWorkspace={props.IdWorkspace}
              />
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
  
  const mapStateToProps = (store) => {

    return {
      item: store.item,

    };
  };

  
  export default connect(mapStateToProps)(Desktop)
  

  