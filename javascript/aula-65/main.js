const timer = setInterval(function (){
  console.log('hello world');
}, 1000);

setTimeout(function () {
  clearInterval(timer);
  console.log('Chega de hello world');
}, 3000);