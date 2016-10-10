"use strict";
var middlewares = require("./patterns/middleware")();
console.log(middlewares);
middlewares.use(function(next){
    console.log("Hello world from method 1");
    next();
});
middlewares.use(function(next){
    console.log("Hello world from method 2");
    next();
});
console.log(middlewares);
middlewares.startTrigger();