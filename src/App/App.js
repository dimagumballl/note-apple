import Desktop from "./Desktop/Desktop";
import Style from './App.module.css'
import Mobile from "./Mobile/Mobile";
import { connect } from 'react-redux';

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
  const [IdWorkspace, setIdWorkspace] = useState(Object.keys(props.item)[0]);
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <div className={Style.App}>

      {
        matches?<Desktop
          setIdWorkspace={setIdWorkspace}
          IdWorkspace={IdWorkspace}
        />:
        <Mobile
      
          setIdWorkspace={setIdWorkspace}
          IdWorkspace={IdWorkspace}
      
        />
      }
     
    </div>
  );
}


const mapStateToProps = (store) => {

  return {
    item: store.item,

  };
};
export default connect(mapStateToProps)(App)

