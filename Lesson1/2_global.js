// window : global object in java. Can directly call its functions like setTimeout
// In node environment global object is L global
console.log(global);
global.setTimeout(()=>{
    console.log("in the timeout");
},3000)

setTimeout(()=>{
    console.log("in the timeout (can be called directly)");
    clearInterval(int);
},3000)

//setInterval returns the time  timeoutID which is a positive integer value
//It identifies the timer created by the call to setTimeout() . This value can be passed to clearTimeout() to cancel the timeout
const int  = setInterval(()=>{
    console.log('in the interval');
},1000);

console.log(__dirname);
console.log(__filename);