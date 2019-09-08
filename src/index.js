const itChanged = opts => {
  const defaults = {
    /*
     * called when `detector.add(obj)` is called. detects if object already exists and emits `detector.on('change')
     */
    add: obj => {},
    exists: obj => false,
    objExists: () => {}
  };
  const { add, exists, objExists } = Object.assign(defaults, opts);

  return {
    add: obj => {
      let oldObj;
      if ((oldObj = exists(obj))) {
        return objExists(oldObj);
      } else return add(obj);
    }
  };
};

module.exports = itChanged;
