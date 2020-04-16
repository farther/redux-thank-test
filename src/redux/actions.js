import {ADD_NEW_ITEM, LOAD_ASYNC_DATA, DELETE_ITEM, MOVE_UP, MOVE_DOWN } from './actionsTypes'


export function asyncLoad(page) {
  return (dispatch) => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => response.json())
      .then(json => dispatch({type: 'LOAD_ASYNC_DATA', payload: json.data.map((item) => item.first_name)}))
  };
}

export function addNewItem(title) {
  return {type: ADD_NEW_ITEM, payload: title}
}

export function deleteItem(index) {
  return {type: DELETE_ITEM, payload: index}
}

export function moveUp(index) {
  return {type: MOVE_UP, payload: index}
}

export function moveDown(index) {
  return {type: MOVE_DOWN, payload: index}
}
