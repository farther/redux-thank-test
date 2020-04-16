import React from 'react';
import {connect} from 'react-redux';
import {asyncLoad, addNewItem, deleteItem, moveUp, moveDown} from "../redux/actions";


class List extends React.Component {

  // componentDidMount() {
  //   this.props.loadData();
  // }

  newItemInput = React.createRef();

  listItem = (title, index, length) => {
    return (
      <li key={index}>
        <span>{title}</span>
        {index !== 0 ? <button onClick={this.props.moveUp.bind(this, index)}>&uarr;</button> : null}
        {index !== length - 1 ? <button onClick={this.props.moveDown.bind(this, index)}>&darr;</button> : null}
        <button onClick={this.props.deleteItem.bind(this, index)}>Remove</button>

      </li>
    )
  };
  inputHandler = () => {
    if (this.newItemInput.current.value === '') {
      return false
    }
    this.props.addNewItem(this.newItemInput.current.value);
    this.newItemInput.current.value = ''
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.itemTitles.map((itemTitle, index) => {
            return this.listItem(itemTitle, index, this.props.itemTitles.length)
          })}

          <li>
            <input ref={this.newItemInput}/>
            <button
              onClick={this.inputHandler}>Add
            </button>

            <button onClick={this.props.loadData.bind(this, this.props.page)}>loadData</button>

          </li>

        </ul>
      </div>
    );
  }
}

function mapStaeToProps(state) {
  return {
    itemTitles: state.itemTitles,
    page: state.page
  }
}

function mapdispatchToProps(dispatch) {
  return {
    addNewItem: (title) => dispatch(addNewItem(title)),
    deleteItem: (index) => dispatch(deleteItem(index)),
    moveUp: (index) => dispatch(moveUp(index)),
    moveDown: (index) => dispatch(moveDown(index)),
    loadData: (page) => dispatch(asyncLoad(page)),
  }
}

export default connect(mapStaeToProps, mapdispatchToProps)(List);