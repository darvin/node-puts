//     puts.js
//     Sergey Klimov <sergey.v.klimov@gmail.com>
//     https://github.com/darvin/node-puts

(function() {
  var treefy = require('treeify');
  module.exports = function(obj) {
    console.log(treefy.asTree(true,true));
  };
  

})();
