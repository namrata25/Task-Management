//create new project
export function createProject(title, description, members) {
  return {
    type: 'CREATE_PROJECT',
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
