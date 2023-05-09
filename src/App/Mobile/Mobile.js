import Style from "./Mobile.module.css"
import TopBar from "../../Components/TopBar/Mobile/TopBar";
import Sidebar from "../../Components/Sidebar/Mobile/Sidebar";
import Workspace from "../../Components/Workspace/Desktop/Workspace";
import React, { useState } from 'react';
import { connect } from 'react-redux';


function Mobile(props) {

    const [OpenBar, setOpenBar] = useState(false);
    function OpenBarF() {
        setOpenBar(!OpenBar)
    }
    function OpenSideBarF(id) {
        props.setIdWorkspace(id)
        setOpenBar(!OpenBar)
    }
    return (
      <div className={Style.Mobile}>
            <TopBar 
                OpenBar={OpenBar}
                setOpenBar={OpenBarF}
            />
            <Sidebar
                item={props.item}
                OpenBar={OpenBar} 
               setOpenBar={OpenSideBarF} 
            />
            <div className={Style.Mobile_100} style={{display:!OpenBar?"none":"flex"}}>
                <Workspace
                    IdWorkspace={props.IdWorkspace}
                />
                
            </div >
            
      </div>
    );
  }
  

  const mapStateToProps = (store) => {

    return {
      item: store.item,

    };
  };

  
  export default connect(mapStateToProps)(Mobile)



  