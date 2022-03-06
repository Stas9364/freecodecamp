function checkObj(obj, checkProp) {
    // Only change code below this line
    let list = obj;
    if (list.hasOwnProperty(checkProp)) {
      return list[checkProp];
    }else {
      return "Not Found";
    }
    return "Change Me!";
    // Only change code above this line
  }