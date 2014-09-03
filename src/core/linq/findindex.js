  /**
   *The findIndex() method returns an index in the Enumerable, if an element in the Enumerable satisfies the provided testing function. Otherwise -1 is returned.
   * @param {Function} predicate 
   *  predicate is invoked with three arguments: 
   *      currentValue - The value of the element
   *      index - The index of the element
   *      enumerable - The Enumerable object being traversed
   * @param {Any} thisArg Object to use as this when executing callback.
   * @returns {Any} The index of the item that satisfies the predicate, else -1.
   */
  iterableProto.findIndex = function (predicate, thisArg) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }    
    if (!isFunction(predicate)) {
      throw new TypeError();
    }     
    var index = 0,
        iterable = this[$iterator$]();
    while (1) {
      var next = iterable.next();
      if (next.done) { return -1; }
      if (predicate.call(thisArg, next.value, index, this)) { return index;  }
      index++;
    }
  };