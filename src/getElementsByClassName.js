// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var forEach = function(collection, func){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			func(collection[i]);
		}
	}else if(collection !== null){
		for(var key in collection){
			func(collection[key]);
		}
	}
};

var getElementsByClassName = function (className) {
	var result = [];
	(function iter(element){
		forEach(element.classList, function(cls){
			if(cls === className){
				result.push(element);
			}
		})
		if(element.hasChildNodes()){
			// forEach(element.childNodes,function(child){
			// 	iter(child);
			// })
			for(var i = 0; i < element.childNodes.length; i++){
				iter(element.childNodes[i]);
			}
		}
	})(document);
	return result;
};

// setTimeout(function(){
// 	var arr = getElementsByClassName('targetClassName');
//   	_.each(arr,function(node){
//   		_.each(node.classList,function(cls){
//   			if(cls==='targetClassName'){
//   				console.log(node);
//   			}
//   		})
//   	})
// },500);

// setTimeout(function(){
// 	var tcn = document.getElementsByClassName('targetClassName');
//   	console.log(tcn);
// },500);

// $(document).ready(function(){
//   var arr = getElementsByClassName('targetClassName');
//   console.log(arr);
// });



