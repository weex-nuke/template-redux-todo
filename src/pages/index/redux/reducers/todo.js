import { INIT_LIST, DELETE_ITEM, ADD_ITEM, MODIFY_ITEM } from '../actions/todo.js';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}
const initState = {
  toDoList: [],
  doneList: [],
};

export default function todoMVC(state = initState, action) {
  switch (action.type) {
    case INIT_LIST:
      return action.data;
    case DELETE_ITEM:
      return {
        ...state,
        toDoList: [...state.toDoList.slice(0, action.id), ...state.toDoList.slice(action.id + 1)],
      };
    case ADD_ITEM:
      state.toDoList.splice(0, 0, {
        content: action.obj.content,
        id: guid(),
      });
      return {
        ...state,
        toDoList: state.toDoList,
      };
    case MODIFY_ITEM: {
      let deleteIndex;
      for (let i = 0; i < state.toDoList.length; i += 1) {
        if (state.toDoList[i].id === action.obj.id) {
          deleteIndex = i;
          break;
        }
      }
      const item = state.toDoList[deleteIndex];
      state.doneList.push(item);
      state.toDoList.splice(deleteIndex, 1);
      return {
        ...state,
        toDoList: state.toDoList,
        doneList: state.doneList,
      };
    }
    default:
      return state;
  }
}
