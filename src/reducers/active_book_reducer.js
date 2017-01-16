export default function activeBookReducer(state = {},action){
  console.log(`LOGGER : action dispatched: ${action.type}`);
  switch (action.type){
    case 'SELECT_BOOK':
      return action.payload;
  }
  return state;
}