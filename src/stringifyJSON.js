// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
  var result = '';
  if(obj === null){return 'null';}
  if(typeof obj === 'object'){
    if(Array.isArray(obj)){
      var count = 0;
      result += '[';
      forEach(obj, function(item){
        result += stringifyJSON(item);
        count += 1;
        if(count !== obj.length){
          result += ',';
        }
      })
      result += ']';
    }else{
      var count = 0;
      var keyCount = Object.keys(obj).length;
      result += '{';
      forEach(obj, function(item, key){
        if(typeof item !== 'function' && item !== undefined){
          result += '\"' + key.toString() + '\"';
          result += ":";
          result += stringifyJSON(item);
          count += 1;
          if(count < keyCount){
            result += ',';
          }
        }
      })
      result += '}';
    }
  }else if(obj !== undefined){
    if(typeof obj === 'string'){
      result += '\"' + obj + '\"';
    }else{
      result += obj.toString();
    }
  }
  return result;
};

function forEach(collection, func){
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
      func(collection[i],i,collection);
    }
  }else if(typeof collection === 'object' && collection !== null){
    for(var key in collection){
      func(collection[key],key,collection);
    }
  }
};
