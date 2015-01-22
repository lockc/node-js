/**
 * Created by lockc on 22/01/15.
 *
 * http://nodejs.org/api/events.html#events_events
 */

events = require("events");
util = require('util');

/*
 * Define a class and make it inherit from EventEmitter
 */
MyObject = function() {

    this.sayHello = function() {
        console.log('hello.');
        this.emit('helloEvent')
    }

    this.sayGoodbye = function() {
        console.log('Goodbye.');
        this.emit('goodbyeEvent')
    }
};
util.inherits(MyObject, events.EventEmitter);



/*
 * Create the object and register some listeners
 */
var obj = new MyObject();

obj.on('helloEvent', function() {
    console.log('hello there!');
});

obj.on('helloEvent', function() {
    console.log('hi');
});

obj.once('helloEvent', function() {
    console.log('hey (only once!)');
});

obj.once('goodbyeEvent', function() {
    console.log('c ya!');
});


/*
 * Call the sayHello function and all the listeners should be triggered.
 */
obj.sayHello();
obj.sayHello();
obj.sayGoodbye();


