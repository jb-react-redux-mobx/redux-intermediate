export default function selectBook(book){
  // return the damn action
  return {
    type:'SELECT_BOOK',
    payload: book
  }
}