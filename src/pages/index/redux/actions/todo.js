export const INIT_LIST = 'INIT_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const MODIFY_ITEM = 'MODIFY_ITEM';

export function initList() {
  return function (dispath) {
    return fetch('http://easy-mock.com/mock/5954c9759adc231f356da959/components/diff/scene/todo/init')
      .then(response => response.json())
      .then((json) => {
        dispath({ type: INIT_LIST, data: json.data });
      });
  };
}
export function deleteItem(id) {
  return { type: DELETE_ITEM, id };
}
export function addItem(obj) {
  return { type: ADD_ITEM, obj };
}
export function modifyItem(obj) {
  return { type: MODIFY_ITEM, obj };
}
