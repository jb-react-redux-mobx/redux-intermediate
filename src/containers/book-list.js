/**
 * Created by joel on 1/12/17.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import selectBook from '../actions/index.js';

// this function binds the action creator to tall the reducers ...runs the action produced by
// the firing of an action creator through all the reducers
import { bindActionCreators } from 'redux';



class BookList extends Component {

  renderList() {
    return this.props.books.map(
      book => {
        return (
          <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
        );
      }
    )
  }

  render() {
    return (
      <div>
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    books:state.books
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook
  },dispatch);
}




export default connect(mapStateToProps,mapDispatchToProps)(BookList);