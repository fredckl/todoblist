export const debounce =(callback, delay) => {
  var timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(function(){
          callback.apply(this, args);
      }, delay)
  }
}