// (function() {}()); encapsulates your function and variables

// (function() {
//    function foo() {
//     console.log('foobar');
//   };
//
//   foo();
// }()); // always close entire function in a () or ...

!function() {
   function foo() {
    console.log('foobar');
  };

  foo();
}(); // ...just start the function with a !

!function(underscore) {
   underscore.someawesomemethod = "Yay!!!";
   console.log(underscore.VERSION);
}(_);

var awesomeNewModule.sub = (function(exports){
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function() {
    console.log("Hello Mars!");
  };
  exports.goodbye = function() {
    console.log("Goodbye!");
  };
  return exports
}(awesomeNewModule.sub || {}));
