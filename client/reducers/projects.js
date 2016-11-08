function projects(state = [], action) {
  if(action.type === "ADD_PROJECT") {
    return [
      ...state, {
        Title: action.title,
        Description: action.description,
        Members: action.members
      }
    ];
  }
  return state;
}

export default projects;
