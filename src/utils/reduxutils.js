export const copyState = (arr) => {
  return arr.slice();
};

export const indexToRemove = (arr, matcher, key) => {
  return arr.findIndex((i) => i[key] === matcher);
};

export const nextId = (arr) => {
  return arr.length + 1;
};
