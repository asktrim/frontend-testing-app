export const removeTask = (id) => ({
  type: "REMOVE_ITEM",
  id,
});

export const addTask = (task) => ({
  type: "ADD_ITEM",
  task,
});
