'use strict';

import { createElement, Component } from 'rax';
import { View } from 'nuke';
import { connect } from 'rax-redux';
import AddItem from '../mods/AddItem.jsx';
import List from '../mods/List.jsx';
import { modifyItem, addItem, initList } from '../redux/actions/todo.js';
import styles from './todo.less';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.dispatch(initList());
  }
  modifyItem = (index) => {
    this.props.dispatch(modifyItem(index));
  };
  addItem = (obj) => {
    this.props.dispatch(addItem(obj));
  };
  render() {
    return (
      <View style={styles.container}>
        <AddItem addItem={this.addItem} />
        <List dataSource={this.props.todoMVC} modifyItem={this.modifyItem} style={styles.list} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoMVC: state.todoReducer,
  };
}

export default connect(mapStateToProps)(Todo);
