'use strict';

import { createElement, Component } from 'rax';
import { Provider } from 'rax-redux';
import reducers from './redux/reducers/index.js';
import createStore from './redux/store/index.js';
import Todo from './container/Todo.jsx';

const store = createStore(reducers);
class ReduxPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
export default ReduxPage;
