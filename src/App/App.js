import Desktop from "./Desktop/Desktop";
import Style from '../style/style.module.css'
import Mobile from "./Mobile/Mobile";
import { connect } from 'react-redux';
import { GetAllState,f_connectio } from "../action/ItemAction";
import { useEffect, useState } from 'react'

function useMediaQuery(query) {
  
  const getMatches = (query) => {

    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)


    handleChange()


    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }

  }, [query])

  return matches
}



function App(props) {

  useEffect(()=>{
    props.GetAllStateAction()
    
  },[])

  const [IdWorkspace, setIdWorkspace] = useState(Object.keys(props.item).length!=0?Object.keys(props.item)[0]:"ANY_NOTE");
  useEffect(()=>{
    if(props.auth.f_connectio){
      setIdWorkspace(Object.keys(props.item).length!=0?Object.keys(props.item)[0]:"ANY_NOTE")
      props.f_connectioAction()
    }
  },[props.item])
  
  const [Search, setSearch] = useState("")
  const matches = useMediaQuery('(min-width: 768px)')

  

  return (
    <div className={Style.App}>

      {
        matches?<Desktop
          setIdWorkspace={setIdWorkspace}
          IdWorkspace={IdWorkspace}
          setSearch={setSearch}
          Search={Search}
        />:
        <Mobile
      
          setIdWorkspace={setIdWorkspace}
          IdWorkspace={IdWorkspace}
          setSearch={setSearch}
          Search={Search}
      
        />
      }
     
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllStateAction:()=>dispatch(GetAllState()),
    f_connectioAction: ()=> dispatch(f_connectio())

  };
};



const mapStateToProps = (store) => {

  return {
    item: store.item,
    auth: store.auth
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)

