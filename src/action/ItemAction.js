
import axios from 'axios'


const urlGetAll = "https://quintadb.com.ua/apps/a1WQFcVeLltiu3WRbCW6q1/dtypes/entity/aLhConWRXcN4kfE8o8tfX5.json?rest_api_key=aZW5jNW4jcT7HaW5tcGmoP"
const urlAddItem = "https://quintadb.com.ua/apps/a1WQFcVeLltiu3WRbCW6q1/dtypes.json?rest_api_key=aZW5jNW4jcT7HaW5tcGmoP"

const entity_id = "aLhConWRXcN4kfE8o8tfX5"
const date_id = "cIlSkUW4XcWRtcKSk6hSk7"
const  text_id = "dcNmolySniryoSs0lcVNWy"
const rest_api_key = "aZW5jNW4jcT7HaW5tcGmoP"


export function GetAllState() {
    
  return async function (dispatch) {
    
    


    const response = await axios.get(urlGetAll)
    .catch(function (error) {
      dispatch({
        type: "CONNECYION_FAIL",
      });
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    if(response!==undefined){
      if(response.data!==undefined){
        dispatch({
          type: "CONNECYION_SUCCESS",
        });
        dispatch({
          type: "F_CONNECYION",
        });
          let TempState = {

          }
          for (let index = 0; index < response.data.records.length; index++) {
              
              TempState = {
                  ...TempState,
                  [response.data.records[index].id]:{
                      id:response.data.records[index].id,
                      text:response.data.records[index].values[text_id],
                      date:response.data.records[index].values[date_id]
                  }
                  
              }
              
          }
          dispatch({
              type: "SET_ALL_STATE",
              payload: TempState,
          });
      }
      
    }
    

  };
}

export function AddItem(item) {
  return async function(dispatch){

    const response = await axios.post(
      urlAddItem,
       {"rest_api_key":rest_api_key,
      "values":{
        "entity_id":entity_id,
        "id":item.id,
        [date_id]:item.date,
        [text_id]:item.text
      }
      }
    )
    .catch(function (error) {
      dispatch({
        type: "CONNECYION_FAIL",
      });
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    if(response!==undefined)
      if(response.data!==undefined){
        dispatch({
          type: "CONNECYION_SUCCESS",
        });
        dispatch({
          type: 'ADD_ITEM',
          payload: item,
        });
      }
    
  }
  
  
}

export function setText(text) {
  return async function(dispatch){

    const urlChangeText = "https://quintadb.com.ua/apps/a1WQFcVeLltiu3WRbCW6q1/dtypes/"+text.id+".json?rest_api_key=aZW5jNW4jcT7HaW5tcGmoP"
    const response = await axios.put(urlChangeText,{
      "rest_api_key":rest_api_key,
      "values":{
        [text_id]:text.text
      }
    })
    .catch(function (error) {
      dispatch({
        type: "CONNECYION_FAIL",
      });
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    if(response!==undefined)
      if(response.data!==undefined){

        dispatch({
          type: "CONNECYION_SUCCESS",
        });
        dispatch({
          type: 'SET_TEXT',
          payload: text,
        });
      }

  }
  
  }


  export function DeleteItem(id) {
    return async function(dispatch){
      const urlDeleteItem = "https://quintadb.com.ua/apps/a1WQFcVeLltiu3WRbCW6q1/dtypes/"+id+".json?rest_api_key=aZW5jNW4jcT7HaW5tcGmoP"
      const response = await axios.delete(urlDeleteItem, {"rest_api_key":rest_api_key})
      .catch(function (error) {
        dispatch({
          type: "CONNECYION_FAIL",
        });
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
  
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
      if(response!==undefined)
        if(response.data!==undefined){
    
    
          const response = await axios.get(urlGetAll)
          .catch(function (error) {
            dispatch({
              type: "CONNECYION_FAIL",
            });
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
      
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
          if(response!==undefined){
            if(response.data!==undefined){
              dispatch({
                type: "CONNECYION_SUCCESS",
              });
              dispatch({
                type: "F_CONNECYION",
              });
                let TempState = {
      
                }
                for (let index = 0; index < response.data.records.length; index++) {
                    
                    TempState = {
                        ...TempState,
                        [response.data.records[index].id]:{
                            id:response.data.records[index].id,
                            text:response.data.records[index].values[text_id],
                            date:response.data.records[index].values[date_id]
                        }
                        
                    }
                    
                }
                dispatch({
                    type: "SET_ALL_STATE",
                    payload: TempState,
                });
            }
            
          }
          
      
        }

    }
    
  }





  export function f_connectio() {
    return {
      type: 'F_CONNECYION',

    };
  }