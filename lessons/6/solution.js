var biggest = function() {
  var largest = arguments[0];

  for(i in arguments) {
    if(arguments[i] > largest) {
      largest = arguments[i];
    }
  }

  return largest;
};

// or more succinctly (and cheating)

var biggest = function() {
  return Math.max.apply(null, arguments);
};
