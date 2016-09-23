function projects(state = [], action) {
  console.log('in projects', state, action);
  switch (action.type) {
    case "ADD_PROJECT":
      console.log('Adding Project');
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i], }
      ]
      break;
    default:

  }
  return state;
}

export default projects;
