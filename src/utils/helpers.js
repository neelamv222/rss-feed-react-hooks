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


/************************************ Task 1 Array Methods START **********************************

Array.prototype.forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

Array.prototype.map = (callback) => {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    const item = callback(this[i], i, this);
    newArr.push(item);
  }
  return newArr;
}

Array.prototype.reduce = (callback, initVal) => {
  for (let i = 0; i < this.length; i++) {
    initVal = callback(initialVal, this[i], i, this);
  }
  return initVal;
}

Array.prototype.filter = (callback) => {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    const isExists = callback(this[i], i, this);
    if(isExists){
      resultArr.push(this[i]);
      break;
    }
  }
  return resultArr;
}
*********************************** Task 1 Array Methods END **********************************/