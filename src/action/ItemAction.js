export function setYear(text) {
    return {
      type: 'SET_TEXT',
      payload: text,
    };
  }
  export function setYear(date) {
    return {
      type: 'SET_DATE',
      payload: date,
    };
  }