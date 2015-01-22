/*
 -----------------------------------------------
 */

var buf = new Buffer(3);
console.log(buf.length);

var buffer = require('buffer');
var buf2 = buffer.Buffer(4);
console.log(buf2.length);

/*
-----------------------------------------------
 */

function RandomObject() {
    return {};
}
var random = new RandomObject();
random.x = 'hello object';
console.log(random.x);

/*
 -----------------------------------------------
 */

MyObject = function() {this.a = 'aa'};

MyObject.prototype.b = 'bb';

var obj = new MyObject();
console.log(obj);
console.log(obj.b);



