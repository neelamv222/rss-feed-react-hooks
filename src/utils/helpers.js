export const every = (obj, func) => {
  let i = 0,
  values = Object.values(obj),
  len = values.length;
  while (i < len) {
      if (!func(values[i])) {
          return false;
      }
      i += 1;
  }
  return true;
};

export const callbackFunc = (el) => {
    return !el;
};
