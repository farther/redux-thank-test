const initState = {
  itemTitles: ["Serhii", 'Andrew', 'Vadim'],
  page: 1
};


export default function listReducer(state = initState, action) {
  // console.log(action);
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return {...state, itemTitles: [...state.itemTitles, action.payload]};
    case 'DELETE_ITEM':
      return deleteItem(state, action.payload);
    case 'MOVE_UP':
      return moveUp(state, action.payload);
    case 'MOVE_DOWN':
      return moveDown(state, action.payload);
    case 'LOAD_ASYNC_DATA':
      return {...state, itemTitles: [...state.itemTitles, ...action.payload], page: state.page + 1};
    default:
      return state
  }
}


const deleteItem = (state, index) => {
  let itemTitles = state.itemTitles.concat();
  itemTitles.splice(index, 1);
  return {...state, itemTitles: [...itemTitles]}
};

const moveUp = (state, index) => {
  let newItemTitles = [];
  state.itemTitles.map((itemTitle, i) => {
    switch (i) {
      case index - 1:
        return newItemTitles[i] = state.itemTitles[i + 1];
      case index:
        return newItemTitles[i] = state.itemTitles[i - 1];
      default:
        return newItemTitles[i] = itemTitle;
    }
  });
  return {...state, itemTitles: [...newItemTitles]}
};

const moveDown = (state, index) => {
  let newItemTitles = [];
  state.itemTitles.map((itemTitle, i) => {
    switch (i) {
      case index + 1:
        return newItemTitles[i] = state.itemTitles[i - 1];
      case index:
        return newItemTitles[i] = state.itemTitles[i + 1];
      default:
        return newItemTitles[i] = itemTitle;
    }
  });
  return {...state, itemTitles: [...newItemTitles]}
};



