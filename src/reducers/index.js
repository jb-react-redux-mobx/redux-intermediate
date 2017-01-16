import { combineReducers } from 'redux';

import BooksReducer from './books_reducer';
import activeBookReducer from './active_book_reducer';

// the keys defined here will make up the keys in our global state object as well
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: activeBookReducer
});


export default rootReducer;
