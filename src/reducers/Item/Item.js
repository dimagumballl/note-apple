

const initialState = {

  };
  
  export function itemReducer(state = initialState, action) {

    switch (action.type) {
      case 'SET_TEXT':
        return { ...state, 
          [action.payload.id]:{
            ...state[action.payload.id],
            text: action.payload.text
          }
           };
      case 'ADD_ITEM':
        
        return { ...state, 
          [action.payload.id]:{
            id:action.payload.id,
            date:action.payload.date,
            text:action.payload.text
          }
           };
         case 'DELETE_ITEM':
          
          return {
            ...action.payload
          };
             
      default:
        return state;
    }
  }