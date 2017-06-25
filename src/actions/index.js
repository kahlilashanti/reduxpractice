export function selectBook(book) {
//selectBook is an action creator that returns an actions
//actions have two values - a type and a payload. every action must have a type
//that describes the purpose of the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
