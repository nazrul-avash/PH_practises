/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   return {
     function toBe(val){

    }
    function notToBe(val){

    }
   }
};


 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
