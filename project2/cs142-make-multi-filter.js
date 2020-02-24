function cs142MakeMultiFilter(originalArray) {
  var currentArray = originalArray;
  return function arrayFilterer(filterCriteria, callback) {
    let tmp = new Array();
    if (filterCriteria === undefined) {
      return currentArray;
    }

    for (let i of currentArray) {
      if (filterCriteria(i) === true) {
        tmp.push(i);
      }
    }

    currentArray = tmp;
    if (typeof callback === "function") {
      let callthis = callback.bind(originalArray);
      callthis(currentArray);
    }
    return arrayFilterer;
  };
}
