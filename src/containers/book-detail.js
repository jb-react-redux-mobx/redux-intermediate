import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render () {

    if(!this.props.book.title){
      return (
        <div>Click on a title</div>
      );
    }

    return (
      <div>
        <div>{this.props.book.title}</div>
        <div>{`no of pages ${this.props.book.pages}`}</div>
      </div>
    );
  }
}

// this will map the the state of our application to props with the keys 
// defined in the the mapStateToProps function
function mapStateToProps(state){
  return {
    book:state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);