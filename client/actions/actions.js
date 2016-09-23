//create new project
export function addProject(title, description, members) {
  console.log('In addProject action ', title, description, members);
  return {
    type: 'ADD_PROJECT',
    title,
    description,
    members
  }
}

//create task
export function createTask(title, description, status) {
  return {
    type: 'CREATE_TASK',
    title,
    description,
    status
  }
}

//add new member
export function addMember(t, member) {
  return {
    type: 'ADD_MEMBER',
    t,
    member
  }
}
