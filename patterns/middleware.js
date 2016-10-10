var app = function(){
    this.middleware = [];
    this.middleware.push(function(){
        console.log("Running the last method in the stack");
        console.log("here next should be null");
    });
};  
app.prototype= {
    use:function(fn){
        this.middleware.push(fn);
    },
    startTrigger:function(count){
        var counter = (count || count>-1)?count:this.middleware.length-1;
        this.middleware[counter].call(this,function(err){
            counter = counter -1;
            err?console.log(err):this.startTrigger(counter);
        }.bind(this));
        counter--;
    }
};

module.exports = function(){
    return new app();
};