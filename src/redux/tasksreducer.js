import { copyState, indexToRemove, nextId } from "../utils/reduxutils";

export default (state = { tasks: [] }, action) => {
  const copiedState = copyState(state.tasks);
  switch (action.type) {
    case "REMOVE_ITEM":
      const index = indexToRemove(copiedState, action.id, "id");
      if (index === -1) {
        return state;
      }
      copiedState.splice(index, 1);
      return { ...state, tasks: copiedState };
    case "ADD_ITEM":
      const newId = nextId(copiedState);
      copiedState.push({ task: action.task, id: newId });
      return { ...state, tasks: copiedState };
    default:
      return state;
  }
};
