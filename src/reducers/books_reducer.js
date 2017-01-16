function BooksReducer(state = [], action) {
  return [
    {title: 'Javascript: The Good Parts',pages:25},
    {title: 'The dark tower',pages:255},
    {title: 'Harry Potter',pages:852},
    {title: 'Eloquent Ruby',pages:2}
  ]
}


export default BooksReducer;