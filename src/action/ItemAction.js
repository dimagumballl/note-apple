export function setText(text) {
    return {
      type: 'SET_TEXT',
      payload: text,
    };
  }
  export function setDate(date) {
    return {
      type: 'SET_DATE',
      payload: date,
    };
    
  }
  export function AddItem(item) {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  }
  export function DeleteItem(items) {
    return {
      type: 'DELETE_ITEM',
      payload: items,
    };
  }