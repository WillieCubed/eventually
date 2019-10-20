import firebase from 'firebase';

const db = firebase.firestore();

const PATH_TASKS = 'tasks';

async function addTask(task) {
  const result = await db.collection(PATH_TASKS).add(task);
  const newTask = Object.assign(task, { id: result.id });
  return newTask;
}

async function editTask(id, task) {
  await db.collection(PATH_TASKS).doc(id).update(task);
}

/**
 * Fetch all the tasks that belong to the given user.
 *
 * @param {String} userId The unique identifier of the user to fetch data
 */
async function getTasks(userId) {
  const docs = await db.collection(PATH_TASKS)
    .where('owner', '==', userId)
    .get();
  const tasks = docs.docs.map(doc => doc.data());
  return tasks;
}

async function deleteTask(taskId) {
  await db.collection(PATH_TASKS)
    .doc(taskId)
    .delete();
}

async function searchTasks({ query }) {
  let firestoreQuery = db.collection('PATH_TASKS');
  for (let i = 0; i < query.length; i += 1) {
    firestoreQuery = firestoreQuery.where('title', '==', query.substr(0, i));
  }
  const matchingTasks = await firestoreQuery.get();
  return matchingTasks;
}

export {
  addTask,
  editTask,
  getTasks,
  deleteTask,
  searchTasks,
};
